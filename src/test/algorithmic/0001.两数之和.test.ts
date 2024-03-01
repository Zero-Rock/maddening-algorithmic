// tslint:disable:no-magic-numbers
import { twoSum } from 'src/algorithmic/0001.两数之和';
import { describe, expect, test } from 'vitest';

describe('0001.两数之和', () => {
  const cases: [number[], number, number[] | undefined][] = [
    [[1, 2, 3, 4, 5], 9, [3, 4]],
    [[1, 1, 1, 1, 1], 3, undefined],
    [[1, 2, 3, 4, 5], 0, undefined],
  ];
  test.each(cases)('twoSum(%s, %i) should return %s', (params1, params2, expected) => {
    expect(twoSum(params1, params2)).toStrictEqual(expected);
  });
});
