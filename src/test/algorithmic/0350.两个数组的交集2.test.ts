import { intersect } from 'src/algorithmic/0350.两个数组的交集2';
import { describe, it, expect } from 'vitest';

describe('两个数组的交集', () => {
  const cases: number[][][] = [
    [
      [1, 2, 2, 1],
      [2, 2],
      [2, 2],
    ],
    [[], [], []],
    [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
      [4, 9],
    ],
    [[1, 2, 3], [4, 5, 6], []],
  ];
  it.each(cases)('intersect(%s, %s) should be %s', (params1, params2, expected) => {
    expect(intersect(params1, params2)).toStrictEqual(expected);
  });
});
