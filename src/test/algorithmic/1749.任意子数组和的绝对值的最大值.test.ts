import { maxAbsoluteSum } from 'src/algorithmic/1749.任意子数组和的绝对值的最大值';
import { describe, expect, it } from 'vitest';

describe('maxAbsoluteSum', () => {
  it('should work', () => {
    const cases = [
      [[1, -3, 2, 3, -4], 5],
      [[2, -5, 1, -4, 3, -2], 8],
    ];
    it.each(cases)('maxAbsoluteSum("%s") should be %s', (params, expected) => {
      expect(maxAbsoluteSum(params as number[])).toBe(expected as number);
    });
  });
});
