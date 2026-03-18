import { sumUnique } from "../../src/pair/sumUnique";

describe("sumUnique", () => {
  test("empty array => 0", () => {
    expect(sumUnique([])).toBe(0);
  });

  test("sums only values that appear once", () => {
    expect(sumUnique([1, 2, 2, 3])).toBe(4);
  });

  test("all duplicates => 0", () => {
    expect(sumUnique([5, 5, 5])).toBe(0);
  });

  test("handles negatives", () => {
    expect(sumUnique([-1, -1, 2, 3, 3, 4])).toBe(6); // 2 + 4
  });
});