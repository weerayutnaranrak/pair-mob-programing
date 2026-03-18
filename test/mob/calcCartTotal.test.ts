import { calcCartTotal } from "../../src/mob/calcCartTotal";

describe("calcCartTotal", () => {
  test("subtotal without discount", () => {
    expect(
      calcCartTotal([
        { sku: "A", unitPriceCents: 1000, qty: 2 }, // 2000
        { sku: "B", unitPriceCents: 500, qty: 1 },  // 500
      ])
    ).toBe(2500);
  });

  test("percent discount rounds to nearest cent", () => {
    expect(
      calcCartTotal([{ sku: "A", unitPriceCents: 999, qty: 1 }], {
        type: "PERCENT",
        percent: 10,
      })
    ).toBe(899); // 999 - round(99.9)=100 => 899
  });

  test("fixed discount", () => {
    expect(
      calcCartTotal([{ sku: "A", unitPriceCents: 1000, qty: 1 }], {
        type: "FIXED_CENTS",
        cents: 250,
      })
    ).toBe(750);
  });

  test("total never goes below 0", () => {
    expect(
      calcCartTotal([{ sku: "A", unitPriceCents: 1000, qty: 1 }], {
        type: "FIXED_CENTS",
        cents: 5000,
      })
    ).toBe(0);
  });

  test("throws on invalid item data", () => {
    expect(() => calcCartTotal([{ sku: "A", unitPriceCents: -1, qty: 1 } as any])).toThrow();
    expect(() => calcCartTotal([{ sku: "A", unitPriceCents: 100, qty: 0 } as any])).toThrow();
    expect(() => calcCartTotal([{} as any])).toThrow();
  });

  test("throws on invalid discount", () => {
    expect(() =>
      calcCartTotal([{ sku: "A", unitPriceCents: 1000, qty: 1 }], {
        type: "PERCENT",
        percent: 101,
      } as any)
    ).toThrow();
  });
});