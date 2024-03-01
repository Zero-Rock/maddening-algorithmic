/**
 * Created by Zero<mobius_pan@yeah.net> on 2023/10/5 09:40.
 */
import { reverse } from 'src/algorithmic/0007.整数反转';
import { describe, expect, it } from 'vitest';

describe('0007.整数反转', () => {
  const cases = [
    [123, 321],
    [210, 12],
    [-123, -321],
    [0, 0],
  ];
  it.each(cases)('reverse( %s ) should return %s', (params, expects) => {
    expect(reverse(params)).toBe(expects);
  });
});
