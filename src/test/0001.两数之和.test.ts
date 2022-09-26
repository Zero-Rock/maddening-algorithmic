import { twoSum } from '../algorithmic/0001.两数之和';
import { expect, test, describe } from 'vitest';

describe('两数之和', () => {
  test('', () => {
    expect(twoSum([1, 2, 3, 4, 5], 4)).toMatchInlineSnapshot(`
      [
        0,
        2,
      ]
    `);
  });
});
