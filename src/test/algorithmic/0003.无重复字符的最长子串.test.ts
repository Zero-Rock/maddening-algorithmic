// tslint:disable:no-magic-numbers
import { lengthOfLongestSubstring } from 'src/algorithmic/0003.无重复字符的最长子串';
import { describe, expect, it } from 'vitest';

describe('0003.无重复字符的最长子串', () => {
  const cases: [string, number][] = [
    ['hello', 3],
    ['world', 5],
    ['ab ab', 3],
  ];
  it.each(cases)('lengthOfLongestSubstring("%s") should return %i', (params, expected) => {
    expect(lengthOfLongestSubstring(params)).toBe(expected);
  });
});
