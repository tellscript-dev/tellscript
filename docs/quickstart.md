# Quickstart

Write your first Tellscript in an afternoon, with the coding agent you already use. One prompt, five steps, one rebuild test.

You need no new tool. A Tellscript is Markdown, and the agent you already use can read and write it. Start with one feature, the one that hurts most when it breaks: checkout, sign-up, billing.

## Copy the prompt

Paste this into Claude Code, Codex, Cursor, Gemini CLI or any agent that can read your repository. It writes a first draft and marks what it cannot give a reason for.

```text
Write a Tellscript for this project under tell/.
One Markdown file per feature, with front matter
(tell, checks, face, rationale) and the sections
Intent, Behaviour, Face, Why and Free.
Every rule gets a stable id (C1, C2 …) and a link
to the test that checks it. Every section carries
a ring: fixed, guided or free.
Mark rules whose reason you cannot find as open.
Follow the format at https://tellscript.com/llms.txt
```

Then review the draft with the five steps below. They are the same steps you would take by hand.

## 1. Start with the product file

Create `tell/product.tell.md`. Write down what the product is for, who uses it, and the few principles that hold on every screen.

`tell/product.tell.md`

```markdown
---
tell: product/shop
features: [product-page, cart, checkout]
tokens: tokens/brand.json
edition: 5
---
# Castwell, cast-concrete homeware

## Intent
Find the right piece and buy it in
three steps, on a phone as well.

## Principles · fixed
P1 Prices always show shipping.
   → checks/price.spec#shipping
P2 No page loads longer than 1 second.
   → checks/perf.spec#p95
```

## 2. Describe one feature

Write its intent in two lines, then its behaviour as numbered statements. Add the look as a reference image and the reasons as decisions. See [statements](statements.md) for how to phrase them.

## 3. Bind every statement to a check

For each id, find the test that proves it, or write one. Name the test after the statement and point to it from the arrow line. A statement you cannot check yet stays in the file as *described*; its check is your next task.

`checks/shop.spec.ts`

```ts
test("one-voucher", async ({ cart }) => {  // C2
  await cart.redeem("SUMMER10");
  const second = await cart.redeem("LOYAL5");
  expect(second.error).toBe("cart.voucher.used");
});
```

## 4. Mark the rings

Decide per section: what must stay exactly as it is (**fixed**), what a model may propose to change (**guided**), what it may improve freely (**free**). When in doubt, fix less; you can tighten later. See [rings](rings.md).

## 5. Run the rebuild test

Ask your agent to build the feature from the Tellscript alone, in an empty folder, and run the checks against it. Every failure is a missing statement or a missing check. Add it and run again. See [the rebuild test](rebuild-test.md).

> [!TIP]
> Download the complete [Castwell example](../examples/castwell/) and keep it open while you write. It has four files and a check.
