export type CartItem = {
  sku: string;
  unitPriceCents: number; // integer cents
  qty: number;            // positive integer
};

export type Discount =
  | { type: "PERCENT"; percent: number }      // 0..100
  | { type: "FIXED_CENTS"; cents: number };   // >= 0

/**
 * Mob Exercise 3:
 * Calculate final cart total in cents after applying ONE discount.
 *
 * Requirements:
 * - Validate inputs (throw on invalid data)
 * - Subtotal = sum(unitPriceCents * qty)
 * - Apply discount:
 *   - PERCENT: subtract round(subtotal * percent/100)
 *   - FIXED_CENTS: subtract cents
 * - Total cannot go below 0
 */
export function calcCartTotal(items: CartItem[], discount?: Discount): number {
  // TODO: implement
  throw new Error("Not implemented");
}