import { fizzBuzz } from "../../src/pair/fizzBuzz";

describe("fizzBuzz", () => {
  test("returns number as string when not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  test("Fizz for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  test("Buzz for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("FizzBuzz for multiples of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});