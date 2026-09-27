# Tellscript format, draft 0.1

Status: draft, 27 September 2026. Open for comment in
[Discussions](https://github.com/tellscript-dev/tellscript/discussions). Breaking changes are possible until 1.0.

The key words MUST, MUST NOT, SHOULD, SHOULD NOT and MAY are to be read as described in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174) when, and only
when, they appear in capitals.

## 1. Purpose

A Tellscript records what a piece of software must do, how it must look, what other systems rely on and why, in a
form that a coding agent can build the software from and a check run can prove. The code is an output; the
Tellscript is the source.

## 2. Files

1. A Tellscript MUST live in a folder named `tell/` in the repository it describes.
2. Tellscript files MUST be UTF-8 Markdown ([CommonMark](https://spec.commonmark.org/)) and MUST end in `.tell.md`.
3. Decisions MUST be ordinary Markdown files in `tell/decisions/`, one decision per file.
4. Reference images SHOULD live in `tell/reference/`, named after the screen and state they show.
5. Checks SHOULD stay where the project keeps its tests. A Tellscript MUST NOT require a service, database or network
   access to be read.

```text
tell/
  product.tell.md
  features/<name>.tell.md
  contracts/<name>.tell.md
  recipes/<name>.tell.md
  decisions/<name>.md
  reference/<screen>-<state>.png
```

## 3. Front matter

Every Tellscript file MUST start with a YAML front matter block between two lines of three dashes. The block is
described by [`schema/front-matter.schema.json`](../schema/front-matter.schema.json).

| Key | Required | Value |
|---|---|---|
| `tell` | MUST | Level and name: `product/`, `feature/`, `contract/`, `recipe/` or `file/`, then a name of lower-case letters, digits and hyphens |
| `checks` | MUST once any statement is bound | List of check files, reference images or recorded flows |
| `binds` | MAY | List of contracts this file touches, with the exact route, type or table after `#` |
| `face` | MAY | List of reference images and design tokens |
| `recipe` | MAY | A recipe file, or a list of them |
| `rationale` | MAY | List of decisions that explain rules in this file |
| `proof` | SHOULD | `described`, `bound` or `proven · edition N` |

Product files MAY add `features` (feature names in reading order), `tokens` (a design token file) and `edition`
(the running edition number). Recipe files MAY add `model`, `refs` and `lineage`.

1. The `tell` value MUST match the file path: `tell: feature/cart` lives in `tell/features/cart.tell.md`.
2. Paths MUST be relative to `tell/`, except paths starting with `checks/`, which are relative to the repository root.
3. A reference to part of a file MUST use `#`: `cart.spec#one-voucher` names the test `one-voucher` in `cart.spec`.
4. `proof` SHOULD be written by a check run, not by hand.

## 4. Layers

The body of a file is divided into layers, one second-level heading each. A file MUST contain an `Intent` layer and
SHOULD contain only the layers it needs.

| Layer | Answers | Holds |
|---|---|---|
| `Intent` | What is it for? | Purpose, users, terms, budgets |
| `Principles` | What holds everywhere? | Product-wide statements (product files) |
| `Behaviour` | What must happen? | Numbered when-then statements |
| `Contracts` | What do others rely on? | Routes, types, tables, events; byte-exact |
| `Face` | What do people recognise? | Tokens, components, quoted texts with ids, reference images |
| `Build` | How is it built? | Stack and architecture, usually `guided` |
| `Why` | Why is it so? | Decisions and lessons, each with a reference |
| `Free` | What may change? | Everything the next edition may improve without asking |

Recipe files use `Style`, `Subject` and `Why` in place of `Behaviour` and `Face`.

## 5. Rings

1. Every layer heading except `Intent` and `Why` MUST name its ring after a middle dot (U+00B7) with one space on
   each side: `## Behaviour · fixed`. The `Free` layer is `free` by definition and MAY omit the ring.
2. The ring is one of:
   - **`fixed`**: an implementation MUST satisfy every statement exactly. A fixed statement changes only through a
     recorded decision.
   - **`guided`**: an implementation MAY propose a different approach with a measurable gain. Accepting it MUST be
     recorded as a decision.
   - **`free`**: an implementation MAY change anything; only the checks decide.
3. An agent MUST NOT change a fixed statement to make a check pass.

## 6. Statements

A statement is one checkable rule.

```markdown
C2 When a second voucher arrives,
   it is declined with a notice.
   → cart.spec#one-voucher
```

1. A statement MUST start at the beginning of a line with an id: one upper-case letter and a number (`C2`), unique
   within the file. `P` is RESERVED for product principles; `C` SHOULD be used for feature statements.
2. The sentence MUST state one rule that a check can prove wrong. Amounts, times and sizes MUST be exact.
3. Continuation lines MUST be indented by three spaces.
4. A reference line MUST start with `→` (U+2192) and name the check, reference image or recipe that proves the
   statement. Several targets are separated by ` · `.
5. Ids are permanent. A removed statement retires its id; an id MUST NOT be reused in the same file.
6. A statement whose reason is unknown MUST be marked `open` and SHOULD say so: `open: reason unknown`.
7. Texts shown to users MUST be quoted, and SHOULD have a text id (`text cart.total`), so a rebuild cannot
   paraphrase them.

## 7. Proof levels

| Level | Reached when |
|---|---|
| `described` | The file was written by hand or from existing code. |
| `bound` | Every statement has a reference line to a check that fails when the statement no longer holds. |
| `proven · edition N` | A model from a different provider built edition N from the Tellscript alone, in an empty folder, and passed every check, including checks it did not see. |

A file written from existing code MUST NOT be marked higher than `described` until a rebuild has passed.

## 8. Editions

An edition is one build of the software from its Tellscript. Editions are numbered from 1. A new edition SHOULD be
built by a newer or different model; it MUST pass every check bound to a fixed statement before it replaces the
running edition. The product file's `edition` key records the running edition.

## 9. Conformance

A Tellscript is conformant with this draft when every file:

1. lives under `tell/`, ends in `.tell.md` and starts with front matter valid against the schema;
2. has a `tell` value that matches its path;
3. names a ring on every layer heading that requires one;
4. gives every statement a unique id and, once `proof` is `bound` or higher, a reference line.

An agent is conformant when it reads the matching Tellscript before changing behaviour, keeps fixed statements,
records accepted guided changes as decisions, and updates `tell/` in the same change as the code.

## 10. Changes to this document

Changes are proposed as issues with the *Spec change* form and decided in pull requests. Every accepted change is
listed in [CHANGELOG.md](../CHANGELOG.md).
