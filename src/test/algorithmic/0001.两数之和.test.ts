// tslint:disable:no-magic-numbers
import { twoSum } from 'src/algorithmic/0001.两数之和';
import { describe, expect, test } from 'vitest';

describe('两数之和', () => {
  const cases = [
    [[1, 2, 3, 4, 5], 9, [3, 4]],
    [[1, 1, 1, 1, 1], 3, undefined],
    [[1, 2, 3, 4, 5], 0, undefined],
  ];
  test.each(cases)('twoSum(%s, %i) should be %s', (params1, params2, expected) => {
    expect(twoSum(params1 as number[], params2 as number)).toStrictEqual(expected);
  });
});
