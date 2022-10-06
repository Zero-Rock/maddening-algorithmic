import { lengthOfLongestSubstring } from 'src/algorithmic/0003.无重复字符的最长子串';
import { expect, describe, it } from 'vitest';

describe('无重复字符的最长子串', () => {
  const cases = [
    ['hello', 3],
    ['world', 5],
    ['ab ab', 3],
  ];
  it.each(cases)('lengthOfLongestSubstring("%s") should be %i', (params, expected) => {
    expect(lengthOfLongestSubstring(params as string)).toBe(expected);
  });
});
