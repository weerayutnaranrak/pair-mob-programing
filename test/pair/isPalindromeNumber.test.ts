import { isPalindromeNumber } from "../../src/pair/isPalindromeNumber";

describe("isPalindromeNumber", () => {
  test("single digit is palindrome", () => {
    expect(isPalindromeNumber(7)).toBe(true);
  });

  test("simple palindrome", () => {
    expect(isPalindromeNumber(121)).toBe(true);
  });

  test("not a palindrome", () => {
    expect(isPalindromeNumber(123)).toBe(false);
  });

  test("negative numbers are not palindromes", () => {
    expect(isPalindromeNumber(-121)).toBe(false);
  });

  test("trailing zero is not palindrome unless the number is 0", () => {
    expect(isPalindromeNumber(10)).toBe(false);
    expect(isPalindromeNumber(0)).toBe(true);
  });
});