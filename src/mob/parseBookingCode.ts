export type BookingCode = {
  prefix: "BK";
  year: number;   // 2000..2099
  seq: number;    // 1..9999
};

/**
 * Mob Exercise 2:
 * Parse codes like: "BK-2026-0042"
 *
 * Requirements:
 * - Format must be exactly "BK-YYYY-NNNN"
 * - Year must be 2000..2099
 * - Sequence must be 0001..9999 (leading zeros allowed in input)
 * - Throw a helpful Error on invalid input
 */
export function parseBookingCode(code: string): BookingCode {
  // TODO: implement
  throw new Error("Not implemented");
}