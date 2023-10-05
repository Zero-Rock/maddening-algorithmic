/**
 * Created by Zero<mobius_pan@yeah.net> on 2023/10/5 09:56.
 */
import { maxArea } from 'src/algorithmic/0011.盛最多水的容器';
import { describe, expect, it } from 'vitest';

describe('盛最多水的容器', () => {
  const cases: [number[], number][] = [
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[1, 1], 1],
  ];
  it.each(cases)('maxArea( %s ) should return %s', (params, expects) => {
    expect(maxArea(params)).toBe(expects);
  });
});
