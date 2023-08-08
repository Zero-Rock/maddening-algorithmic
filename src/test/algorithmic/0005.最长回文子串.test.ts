import { longestPalindrome } from 'src/algorithmic/0005.最长回文子串';
import { describe, expect, it } from 'vitest';

describe('最长回文子串', () => {
  const cases = [
    ['abcba', 'abcba'],
    ['world', 'd'],
    ['ab ba', 'ab ba'],
  ];
  it.each(cases)('longestPalindrome("%s") should return %s', (params, expected) => {
    expect(longestPalindrome(params as string)).toBe(expected);
  });
});
