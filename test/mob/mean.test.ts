import { mean } from "../../src/mob/mean";

describe("mean", () => {
  test("mean of [2,4] is 3", () => {
    expect(mean([2, 4])).toBe(3);
  });

  test("mean of [1,2,3] is 2", () => {
    expect(mean([1, 2, 3])).toBe(2);
  });

  test("throws on empty array", () => {
    expect(() => mean([])).toThrow();
  });

  test("throws if input is not an array", () => {
    expect(() => mean("nope" as any)).toThrow();
    expect(() => mean(null as any)).toThrow();
  });

  test("throws if any element is not a finite number", () => {
    expect(() => mean([1, "2", 3] as any)).toThrow();
    expect(() => mean([1, NaN, 3] as any)).toThrow();
    expect(() => mean([1, Infinity, 3] as any)).toThrow();
  });
});