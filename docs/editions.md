# Editions and upgrades

An edition is one build of your app from the Tellscript by one model. What it replaces, what it keeps, and how an upgrade to a new model runs overnight.

An edition is one build of your app from the Tellscript, by one particular model. It is replaceable by design. Edition 5 of a shop may use a different framework than edition 4 and still be the same shop, because the rules that make it that shop are fixed and checked.

| In a new edition | What it means |
|---|---|
| **Replaced** | The code, its structure, internal names, the build setup; the framework, if the guided ring allows it |
| **Kept** | Data, migrations, files already shipped to users, URLs and contracts other systems use, check results |
| **Carried** | Everything in the Tellscript: statements, rings, decisions, references and recipes |

## The upgrade loop

Upgrading is no longer a migration project. It is a rebuild with a review at the end, and it can run overnight.

1. **A new model ships**, or you want a redesign, a new platform, a new framework.
2. **Rebuild in an empty folder.** The model reads only the Tellscript, its references and recipes.
3. **Run every check**: tests, contracts, reference images and the hidden bench.
4. **Review the difference** in a pull request: which statements held, what got fixed, what improved in the free ring, and which guided proposals wait for a decision.

## Three ways to rebuild

| Mode | Scope | Use it for |
|---|---|---|
| Retouch | One file at a time, inside the existing edition | Small upgrades, the first rebuilds of a new Tellscript |
| Recompose | One feature, rebuilt next to the old one | New framework or architecture for part of the app |
| Full rebuild | The whole app in an empty folder | A new model generation, a platform switch, a redesign |

> [!TIP]
> Start with retouches. A full rebuild is only as safe as your checks; the [rebuild test](rebuild-test.md) tells you when they are ready.
