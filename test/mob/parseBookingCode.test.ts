import { parseBookingCode } from "../../src/mob/parseBookingCode";

describe("parseBookingCode", () => {
  test("parses a valid booking code", () => {
    expect(parseBookingCode("BK-2026-0042")).toEqual({
      prefix: "BK",
      year: 2026,
      seq: 42,
    });
  });

  test("rejects wrong prefix", () => {
    expect(() => parseBookingCode("XX-2026-0042")).toThrow(/BK/i);
  });

  test("rejects wrong separators/shape", () => {
    expect(() => parseBookingCode("BK20260042")).toThrow();
    expect(() => parseBookingCode("BK-2026-42")).toThrow();
  });

  test("rejects year out of range", () => {
    expect(() => parseBookingCode("BK-1999-0001")).toThrow(/year/i);
    expect(() => parseBookingCode("BK-2100-0001")).toThrow(/year/i);
  });

  test("rejects sequence out of range", () => {
    expect(() => parseBookingCode("BK-2026-0000")).toThrow(/seq|sequence/i);
    expect(() => parseBookingCode("BK-2026-10000")).toThrow(/seq|sequence/i);
  });
});