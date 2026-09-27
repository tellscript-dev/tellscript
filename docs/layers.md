# Layers

Six layers, each answering one question a new model would otherwise have to guess, plus the proof layer that every statement points to.

Below the front matter, a file is organised in layers, one section heading each. A small feature may need only Intent and Behaviour; a product file uses most layers. What a new model would otherwise have to guess belongs in one of them.

| Layer | Answers | Holds | Example |
|---|---|---|---|
| **Intent** | What is it for? | Purpose, users, terms, principles, budgets for speed, accessibility and cost | `P1 Prices always show shipping.` |
| **Behaviour** | What must happen? | Flows as numbered when-then statements, each with its check | `C1 Orders from €50.00 ship free.` |
| **Contracts** | What do others rely on? | Routes, API types, tables, storage keys, events; byte-exact | `POST /api/cart/voucher` |
| **Face** | What do people recognise? | Design tokens, components, texts with stable ids, reference images per state | `reference/product.png` |
| **Why** | Why is it so? | Decisions with rejected alternatives, lessons from failures, each with a check | `decision/one-voucher` |
| **Recipes** | How is content made? | Brief, model, references and parameters for images, texts and data | `recipe/product-photos` |
| **Proof** | Does it still hold? | Checks, reference images and recorded flows | `shop.spec#one-voucher` |

## Headings

Each layer is a second-level heading. The heading names its [ring](rings.md) after a middle dot:

`tell/features/product-page.tell.md`

```markdown
## Intent
Buy without surprises: price, shipping and stock
are settled before anyone pays.

## Behaviour · fixed
C1 Orders from €50.00 ship free.
   → shop.spec#free-shipping

## Face · fixed
C3 Price and “Add to cart” stay in
   view without scrolling.
   → reference/product.png

## Free
Layout, speed, stack, internal names.
```

- **Intent** carries no ring; it explains and is never checked directly.
- **Build** is an optional layer for stack and architecture, usually `guided`: “The server computes prices. Framework open.”
- **Free** lists what the next edition may change without asking. Writing it down is what lets a better model improve it.
