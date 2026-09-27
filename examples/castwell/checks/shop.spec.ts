test("one-voucher", async ({ cart }) => {  // C2
  await cart.redeem("SUMMER10");
  const second = await cart.redeem("LOYAL5");
  expect(second.error).toBe("cart.voucher.used");
  await expect(cart.notice)
    .toHaveText(t("cart.voucher.used"));
});
