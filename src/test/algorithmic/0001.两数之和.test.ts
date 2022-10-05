import { twoSum } from 'src/algorithmic/0001.两数之和';
import { expect, test, describe } from 'vitest';

describe('两数之和', () => {
  test('should be worked well', () => {
    expect(twoSum([1, 2, 3, 4, 5], 9)).toStrictEqual([3, 4]);
  });
});
