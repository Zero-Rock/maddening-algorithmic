/**
 * Created by Zero<mobius_pan@yeah.net> on 2023/1/24 15:23.
 */
import { divide } from 'src/algorithmic/0029.两数相除';
import { describe, expect, it } from 'vitest';

describe('两数相除', () => {
  const cases: [number, number, number][] = [
    [100, 3, 33],
    [2, 1, 2],
  ];
  it.each(cases)('divide(%s, %s) should return %s', (dividend: number, divisor: number, expected) => {
    expect(divide(dividend as unknown as number, divisor)).toBe(expected);
  });
});
