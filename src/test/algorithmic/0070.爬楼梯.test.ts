import { climbStairs, climbStairs2 } from 'src/algorithmic/0070.爬楼梯';
import { describe, expect, it } from 'vitest';

describe('0070.爬楼梯', () => {
  const testCases = [
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: 3 },
    { input: 4, expected: 5 },
  ];

  const testFunction = (fn: Function, functionName: string) => {
    describe(functionName, () => {
      testCases.forEach(({ input, expected }) => {
        it(`输入${input}，输出${expected}`, () => {
          expect(fn(input)).toBe(expected);
        });
      });
    });
  };

  testFunction(climbStairs, 'climbStairs');
  testFunction(climbStairs2, 'climbStairs2');
});
