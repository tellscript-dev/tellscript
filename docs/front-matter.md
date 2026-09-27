# Front matter

The block at the top of every Tellscript file names it and points to its checks, contracts, reference images, recipes and decisions.

Every Tellscript file starts with a short YAML block between two lines of dashes. It names the file and points to everything that proves or explains it. An agent reads this block first and knows which tests, images and decisions belong to the feature.

`tell/features/cart.tell.md`

```markdown
---
tell: feature/cart
binds: [contract/http#POST /api/cart/voucher]
checks: [checks/cart.spec.ts]
face: [reference/cart.png, tokens/brand.json]
rationale: [decision/one-voucher]
proof: proven · edition 4
---
```

## Keys

| Key | Required | Points to |
|---|---|---|
| `tell` | yes | Name and level: `product/`, `feature/`, `contract/`, `recipe/` or `file/`, then the name |
| `checks` | yes, once bound | Test files, reference images or recorded flows that the statements point to |
| `binds` | no | Contracts this file touches, with the exact route, type or table |
| `face` | no | Reference images and design tokens for the look |
| `recipe` | no | Recipes for pictures, texts or data the feature shows |
| `rationale` | no | Decisions that explain the rules in this file |
| `proof` | yes | Proof level and the edition that reached it: `described`, `bound` or `proven · edition N` |

Product files add `features` (the feature files, in reading order), `tokens` (design tokens) and `edition` (the edition currently running). Recipe files add `model`, `refs` and `lineage`; see [recipes](recipes.md).

## Rules

- Paths are relative to `tell/`, except `checks/`, which points to your test folder.
- A reference to part of a file uses `#`: `cart.spec#one-voucher` is the test named `one-voucher`.
- `proof` is written by the check run, not by hand. See [proof levels](proof.md).
