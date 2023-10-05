import { letterCombinations } from 'src/algorithmic/0017.电话号码的字母组合';
import { describe, expect, it } from 'vitest';

describe('电话号码的字母组合', () => {
  const cases: [string, string[]][] = [
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
    ['12', ['a', 'b', 'c']],
    ['2', ['a', 'b', 'c']],
    ['1', []],
    ['', []],
    ['91', ['w', 'x', 'y', 'z']],
    ['912', ['wa', 'wb', 'wc', 'xa', 'xb', 'xc', 'ya', 'yb', 'yc', 'za', 'zb', 'zc']],
  ];
  it.each(cases)('letterCombinations(%s) should return %s', (params, expected) => {
    expect(letterCombinations(params)).toStrictEqual(expected);
  });
});
