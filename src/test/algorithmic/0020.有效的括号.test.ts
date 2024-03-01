import { isValid } from 'src/algorithmic/0020.有效的括号';
import { describe, expect, it } from 'vitest';

describe('0020.有效的括号', () => {
  const cases: [string, boolean][] = [
    ['()', true],
    ['()[]{}', true],
    ['()[({})(]{}', false],
  ];
  it.each(cases)('isValid(%s) should return %s', (params, expected) => {
    expect(isValid(params)).toBe(expected);
  });
});
