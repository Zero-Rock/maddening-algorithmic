// tslint:disable:no-magic-numbers
import { maxProfit } from 'src/algorithmic/0121.买卖股票的最佳时机';
import { describe, expect, it } from 'vitest';

describe('0121.买卖股票的最佳时机', () => {
  const cases: [number[], number][] = [
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ];
  it.each(cases)('maxProfit(%s) should return %i', (params, expected) => {
    expect(maxProfit(params)).toBe(expected);
  });
});
