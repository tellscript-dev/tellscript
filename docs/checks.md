# Checks

How a Tellscript statement is bound to a test, a contract, a reference image or a recipe, and what happens when an edition breaks a rule.

A statement is only as good as the check that can prove it wrong. The Tellscript says what must hold; the check proves that it does. A test without a statement has no reason, and a statement without a test is a wish.

## One id, in two places

`tell/features/product-page.tell.md`

```markdown
## Behaviour · fixed
C2 A second voucher is declined
   with a notice.
   → shop.spec#one-voucher
```

`checks/shop.spec.ts`

```ts
test("one-voucher", async ({ cart }) => {  // C2
  await cart.redeem("SUMMER10");
  const second = await cart.redeem("LOYAL5");
  expect(second.error).toBe("cart.voucher.used");
  await expect(cart.notice)
    .toHaveText(t("cart.voucher.used"));
});
```

The reference line `→ shop.spec#one-voucher` and the test name `one-voucher` are the binding. The comment `// C2` lets people find their way back.

## Four kinds of check

| Statement kind | Checked by | Example |
|---|---|---|
| Behaviour | Unit, integration or end-to-end tests; the test name carries the id | `shop.spec#one-voucher` |
| Contracts | Routes, types and stored data compared byte by byte with the contract file | `contract/http#POST /api/cart/voucher` |
| Face | Each screen and state rendered on phone and desktop and compared with its reference image | `reference/cart.png` |
| Recipes | Every picture or text keeps a note of the recipe, model and references it came from | `recipes/product-photos` |

## When a check fails

An edition that breaks a fixed statement is not accepted. The model may rewrite every line of code, but it cannot quietly change what the product promises.

`tell check`

```text
edition 6
  ✓ C1 free-shipping
  ✗ C2 one-voucher
    second voucher accepted
  ✓ C3 price-in-view
  ✓ C4 photo-recipe

edition 6 not accepted · 1 fixed statement broken
```

- In the free ring, the agent fixes the code and runs the checks again.
- It never edits a statement to make a test pass.
- A fixed statement changes only together with a [decision](decisions.md).

## The hidden test bench

A model that sees the tests can learn the tests instead of the product. For a rebuild, keep a second set of checks and screenshots from the running edition that the building model never sees. Only what the Tellscript really carries passes both. Whatever the hidden bench catches was never written down: it becomes a new statement with its own id.
