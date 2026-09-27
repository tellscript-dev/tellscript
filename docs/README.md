# Introduction

Tellscript is an open Markdown format that records what your software must do, how it looks and why, so any AI agent can build it and every new model can rebuild it better.

Tellscript is an open format for the part of your software that should outlive its code. A Tellscript is a folder of Markdown files next to your code. It records what the product must do, how it must look, what other systems rely on and why things are the way they are. Every rule has a stable id and a check that fails when the rule breaks.

Any coding agent can read it. Claude Code, Codex, Cursor, Gemini CLI or an open model builds the code from it, and when a better model arrives, it builds the next **edition** of the same app: the fixed rules stay, the free parts get better.

## Why a new format

AI writes code, images and documents in minutes. How and why they came out that way is forgotten the moment they exist. The next agent tidies up and brings back the bug that was the reason for an odd rule. The tenth image no longer matches the first. Every rebuild copies the last one, flaws included.

Tellscript keeps the mould instead of the cast. The code becomes an output you can throw away; the Tellscript is the source.

## How it works

1. **Write it down.** One file per feature: intent, numbered statements, the look as a reference image, the reasons as decisions.
2. **Bind it.** Every statement points to the test, reference image or recipe that proves it.
3. **Build and rebuild.** Any agent builds an edition from the Tellscript. The checks decide whether it is accepted.

`tell/features/cart.tell.md`

```markdown
## Behaviour · fixed
C1 When the goods reach €50.00,
   shipping is free.
   → cart.spec#free-shipping
C2 When a second voucher arrives,
   it is declined with a notice.
   → cart.spec#one-voucher
```

## What is in these docs

| Section | Read it when |
|---|---|
| [Quickstart](quickstart.md) | you want a first Tellscript in an afternoon |
| [Teach your agent](agents.md) | you want Claude Code, Codex, Cursor or another agent to know the format |
| [The format](files.md) | you write or review Tellscripts and want the exact rules |
| [Checks](checks.md) and [editions](editions.md) | you rebuild with a new model or guard an app against drift |
| [Example](example.md) | you learn best from a complete, working set of files |

> [!NOTE]
> Tellscript is plain Markdown in your repository. There is no service to sign up for and nothing to install to start. Tools that make it more comfortable are in development; see [the CLI preview](cli.md).

## All pages

## Get started

- [Introduction](README.md): Tellscript is an open Markdown format that records what your software must do, how it looks and why, so any AI agent can build it and every new model can rebuild it better.
- [Quickstart](quickstart.md): Write your first Tellscript in an afternoon, with the coding agent you already use. One prompt, five steps, one rebuild test.
- [Teach your agent](agents.md): Make Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot or any other coding agent read, write and respect your Tellscript, with one file or one prompt.

## The format

- [Files and folders](files.md): A Tellscript is a folder called tell/ in your repository, with one Markdown file per product, feature, contract and recipe, plus decisions and reference images.
- [Front matter](front-matter.md): The block at the top of every Tellscript file names it and points to its checks, contracts, reference images, recipes and decisions.
- [Layers](layers.md): Six layers, each answering one question a new model would otherwise have to guess, plus the proof layer that every statement points to.
- [Statements](statements.md): A statement is one checkable sentence with a stable id and a reference line to the check that proves it. How to write, number and retire them.
- [Rings](rings.md): Every section carries a ring, fixed, guided or free, that tells the next model how much it may change and who decides.
- [Levels and proof](proof.md): Tellscripts come in four levels, from product to file, and three proof levels, from described to proven by a model from another lab.

## Working with Tellscript

- [Checks](checks.md): How a Tellscript statement is bound to a test, a contract, a reference image or a recipe, and what happens when an edition breaks a rule.
- [Editions and upgrades](editions.md): An edition is one build of your app from the Tellscript by one model. What it replaces, what it keeps, and how an upgrade to a new model runs overnight.
- [The rebuild test](rebuild-test.md): Once a week, let an agent rebuild the app from the Tellscript in an empty folder. Whatever goes missing was never written down.
- [Recipes](recipes.md): A recipe records how a picture, text or data set was made, so the tenth image matches the first and any of them can be made again.
- [Decisions](decisions.md): A decision records why a rule exists and which alternatives were rejected, so no future rebuild tidies away the reason.

## Reference

- [Example: Castwell](example.md): A complete, small Tellscript for Castwell, a cast-concrete homeware shop: product, product page, cart, a photo recipe and the check that binds them.
- [CLI preview](cli.md): The tell command line tool is in development. It extracts Tellscripts from existing code, checks code against them and rebuilds editions with any model.
- [Questions](faq.md): What people ask first about Tellscript: editions, existing code, models that ignore it, who changes it, which agents it works with, and how long it gets.
- [Glossary](glossary.md): The terms used in Tellscript, from binding and edition to ring, recipe and the rebuild test, in one sentence each.
