import { maxProfit } from 'src/algorithmic/0121.买卖股票的最佳时机';
import { expect, describe, it } from 'vitest';

describe('买卖股票的最佳时机', () => {
  const cases = [
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ];
  it.each(cases)('maxProfit(%s) should be %i', (params, expected) => {
    expect(maxProfit(params as number[])).toBe(expected);
  });
});
