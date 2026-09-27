# Levels and proof

Tellscripts come in four levels, from product to file, and three proof levels, from described to proven by a model from another lab.

## Levels

Tellscripts are layered like the software itself. The product file holds what is true everywhere; below it sit feature files, contract files and, rarely, file files.

| Level | `tell:` prefix | What it holds | Write it |
|---|---|---|---|
| Product | `product/` | Purpose, users, terms, principles | Always |
| Feature | `feature/` | One flow with statements, states and texts | Always |
| Contract | `contract/` | What other systems use, byte-exact | Always |
| File | `file/` | Interface and rules of one code file | Once the file is proven and others depend on it |

## Proof levels

The `proof` key in the front matter says how far a file can be trusted, and which edition got it there. Proof is earned by checks, not declared.

| Proof level | Reached when |
|---|---|
| `described` | Written from the code or by hand. Useful as a map, not yet a source. |
| `bound` | Every statement has a check that fails when it no longer holds. |
| `proven · edition N` | A model from another lab rebuilt it from the Tellscript alone, in an empty folder, and passed every check, including the hidden ones. |

> [!IMPORTANT]
> A Tellscript written from existing code is a summary of that code, bugs included, until a rebuild has passed. Treat `described` files as a starting point, and let the [rebuild test](rebuild-test.md) move them up.
