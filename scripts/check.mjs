#!/usr/bin/env node
// Checks every .tell.md file under the given folders against the Tellscript format (spec/draft.md, section 9):
// front matter valid against the schema, `tell` matching the path, rings on layer headings, unique statement ids.
//
//   node scripts/check.mjs [folder ...]      default: examples

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { parse } from "yaml";
import Ajv from "ajv/dist/2020.js";

const schema = JSON.parse(readFileSync(new URL("../schema/front-matter.schema.json", import.meta.url)));
const validate = new Ajv({ allErrors: true }).compile(schema);
const RINGS = new Set(["fixed", "guided", "free"]);
const NO_RING = new Set(["Intent", "Why", "Free"]);
const FOLDER = { product: "", feature: "features", contract: "contracts", recipe: "recipes", file: "files" };

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (name.endsWith(".tell.md")) yield path;
  }
}

function check(path) {
  const errors = [];
  const text = readFileSync(path, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return ["missing front matter"];
  const [, head, body] = match;
  let meta;
  try {
    meta = parse(head);
  } catch (error) {
    return [`front matter is not valid YAML: ${error.message}`];
  }
  if (!validate(meta)) errors.push(...validate.errors.map((e) => `front matter ${e.instancePath || "/"} ${e.message}`));

  const parts = path.split(sep);
  const inside = parts.slice(parts.lastIndexOf("tell") + 1).join("/");
  if (typeof meta?.tell === "string") {
    const [level, ...name] = meta.tell.split("/");
    const expected = [FOLDER[level], `${name.join("/")}.tell.md`].filter(Boolean).join("/");
    if (level === "product" ? !inside.endsWith(".tell.md") || inside.includes("/") : inside !== expected)
      errors.push(`tell: ${meta.tell} does not match the path tell/${inside}`);
  }

  const ids = new Set();
  let statement = false;
  body.split("\n").forEach((line, i) => {
    const at = `line ${i + head.split("\n").length + 3}`;
    const heading = line.match(/^## (.+)$/);
    if (heading) {
      const [layer, ring] = heading[1].split(" · ");
      if (ring !== undefined && !RINGS.has(ring)) errors.push(`${at}: unknown ring "${ring}"`);
      if (ring === undefined && !NO_RING.has(layer)) errors.push(`${at}: layer "${layer}" names no ring`);
      statement = false;
      return;
    }
    const id = line.match(/^([A-Z]\d+) \S/);
    if (id) {
      if (ids.has(id[1])) errors.push(`${at}: statement id ${id[1]} is used twice`);
      ids.add(id[1]);
      statement = true;
      return;
    }
    if (statement && line.trim() && !line.startsWith("   ")) errors.push(`${at}: continuation lines are indented by three spaces`);
    if (!line.trim()) statement = false;
  });
  return errors;
}

const roots = process.argv.slice(2);
let files = 0;
let failed = 0;
for (const root of roots.length ? roots : ["examples"]) {
  for (const path of walk(root)) {
    files += 1;
    const errors = check(path);
    if (errors.length) {
      failed += 1;
      console.error(`✗ ${relative(process.cwd(), path)}`);
      for (const error of errors) console.error(`  ${error}`);
    } else console.log(`✓ ${relative(process.cwd(), path)}`);
  }
}
console.log(`\n${files} files, ${failed} with errors`);
process.exit(failed || !files ? 1 : 0);
