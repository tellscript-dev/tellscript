---
name: tellscript
description: Read, write and keep a Tellscript, the Markdown source format in tell/ that records what an app must do, how it looks and why, with a stable id and a check per rule. Use when a repository has a tell/ folder or .tell.md files, when asked to write a Tellscript or spec for an app, when changing behaviour that a Tellscript describes, or when rebuilding an app from its Tellscript.
license: Apache-2.0
metadata:
  homepage: https://tellscript.com
  format-version: draft 0.1
---

# Tellscript

A Tellscript is a folder `tell/` of Markdown files next to the code. It is the source of truth for what the software
must do (Behaviour), what others rely on (Contracts), how it looks (Face) and why (decisions). The code is an output
that any agent may rebuild; the checks decide whether it is accepted.

The exact rules are in [references/format.md](references/format.md). A complete example is in
[references/example.md](references/example.md).

## When the repository has a tell/ folder

1. Before changing behaviour, read the matching file: `tell/product.tell.md` first, then the feature in
   `tell/features/`. Follow the `→` lines to the checks, and `rationale:` to the decisions.
2. Respect the ring on each section heading (`## Behaviour · fixed`):
   - **fixed**: keep every statement exactly. Never edit a fixed statement or its check to make a test pass. If the
     request conflicts with one, stop and propose a decision in `tell/decisions/` instead.
   - **guided**: you may propose a better approach with a measurable gain; ask before adopting it and record it as
     a decision.
   - **free**: improve it freely; only the checks decide.
3. New or changed behaviour updates `tell/` in the same change as the code: one sentence per rule, a new id that was
   never used in that file, and a `→` line to the check that proves it. Write the check too.
4. Never reuse a retired id. Mark a rule whose reason nobody knows as `open: reason unknown` instead of deleting it.
5. Quote every text users see, exactly, with a text id.

## When asked to write a Tellscript

1. Start with `tell/product.tell.md`: Intent, then product-wide Principles `P1`, `P2` … with checks.
2. Write one file per feature the user experiences, not per code file: Intent, `## Behaviour · fixed` with
   when-then statements `C1`, `C2` …, `## Face · fixed` with quoted texts and reference images, `## Why`, `## Free`.
3. Make every statement checkable: one rule, exact numbers, the outcome rather than the code.
4. Point every statement to an existing test. Where none exists, write it, or leave the file at `proof: described`.
5. Mark rules you cannot explain as `open`. Do not invent reasons.
6. A Tellscript written from existing code describes that code, bugs included. Set `proof: described` and say so.
7. Keep feature files between 30 and 80 lines; split files that grow past 150.

## When asked to rebuild from a Tellscript

1. Work in an empty folder. Read only `tell/` and the checks named in it, not the old code.
2. Build to satisfy every fixed statement, propose guided changes, and improve free parts.
3. Run all checks. The edition is accepted only when every check bound to a fixed statement passes.

## Validate

If this repository's tooling is available, `node scripts/check.mjs <folder>` checks front matter, paths, rings and
ids. Otherwise check by hand against section 9 of [references/format.md](references/format.md).
