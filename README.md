# Pair & Mob Programming Workshop (TypeScript + Jest)

This repo contains **6 small exercises** for a **2-hour workshop**:
- **Pair programming (3 functions)**: small, focused problems
- **Mob programming (3 functions)**: more discussion/design + edge cases

All implementations start as **TODO / Not implemented** and are driven by tests.

---

## Prerequisites
- Node.js **18+** (recommended)
- npm (comes with Node)

Check:
```bash
node -v
npm -v
```

---

## Setup
Install dependencies:
```bash
npm install
```

---

## Run tests (npm scripts)

### Run all tests
```bash
npm test
```

### Run tests for a specific function (recommended during workshop)

#### Pair exercises
**1) isPalindromeNumber**
```bash
npm run test:pair:palindrome
```

**2) fizzBuzz**
```bash
npm run test:pair:fizzbuzz
```

**3) sumUnique**
```bash
npm run test:pair:sumunique
```

#### Mob exercises
**4) mean**
```bash
npm run test:mob:mean
```

**5) parseBookingCode**
```bash
npm run test:mob:booking
```

**6) calcCartTotal**
```bash
npm run test:mob:cart
```

### Watch mode (optional)
```bash
npm run test:watch
```

> If these scripts are missing, add them under `"scripts"` in `package.json`.

---

## Folder structure
```text
src/
  pair/
    isPalindromeNumber.ts
    fizzBuzz.ts
    sumUnique.ts
  mob/
    mean.ts
    parseBookingCode.ts
    calcCartTotal.ts

test/
  pair/
    isPalindromeNumber.test.ts
    fizzBuzz.test.ts
    sumUnique.test.ts
  mob/
    mean.test.ts
    parseBookingCode.test.ts
    calcCartTotal.test.ts
```

---

## Exercises

### Pair programming (do these in pairs)
Recommended rotation: **every 5 minutes**

1) `isPalindromeNumber(n: number): boolean`
- Decide and implement rules for negatives and trailing zeros
- Keep steps small and test-driven

2) `fizzBuzz(n: number): string`
- Classic logic kata, ideal for practicing driver/navigator roles

3) `sumUnique(nums: number[]): number`
- Great for practicing small refactors and using a `Map`/object counting approach

---

### Mob programming (do these as a mob)
Recommended rotation: **every 3–4 minutes** (workshop), **7–15 minutes** (real work)

4) `mean(input: unknown): number`
- Emphasizes validation and error handling
- Great for “write regression tests → implement” flow

5) `parseBookingCode(code: string): BookingCode`
- Parsing + validation + edge cases
- Encourages team discussion: regex vs split, error messages, types

6) `calcCartTotal(items: CartItem[], discount?: Discount): number`
- A mini “discount engine”
- Refactor-friendly: can split validation, subtotal, discount calculation, rounding rules

---

## Notes / tips
- Prefer **small commits/changes**: one failing test → minimal fix → refactor
- Use a “parking lot” for side ideas during mobbing
- If stuck: restate the goal in one sentence:  
  **“We’ll be done when ___ (observable behavior) happens.”**

---

## Troubleshooting

### Jest doesn’t find tests
Make sure your files match:
- `test/**/*.test.ts`

### TypeScript compile / config issues
Confirm these exist:
- `tsconfig.json`
- `jest.config.ts`
- `devDependencies`: `typescript`, `jest`, `ts-jest`, `@types/jest`

---

## License
Workshop/demo code — use freely within your team/training.