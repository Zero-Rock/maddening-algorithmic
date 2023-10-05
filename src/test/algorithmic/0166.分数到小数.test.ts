// tslint:disable:no-magic-numbers
import { fractionToDecimal } from 'src/algorithmic/0166.分数到小数';
import { describe, expect, it } from 'vitest';

describe('分数到小数', () => {
  const cases: [number, number, string][] = [
    [1, 2, '0.5'],
    [-1, 2, '-0.5'],
    [1, -2, '-0.5'],
    [-1, -2, '0.5'],
    [4, 333, '0.(012)'],
    [0, 1, '0'],
    [1, 0, ''],
  ];
  it.each(cases)('fractionToDecimal(%s, %s) should return "%s"', (numerator, denominator, expected) => {
    expect(fractionToDecimal(numerator, denominator)).toBe(expected);
  });
});
