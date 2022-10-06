import { isValid } from 'src/algorithmic/0020.有效的括号';
import { describe, it, expect } from 'vitest';

describe('有效的括号', () => {
  const cases = [
    ['()', true],
    ['()[]{}', true],
    ['()[({})(]{}', false],
  ];
  it.each(cases)('isValid(%s) should be %i', (params, expected) => {
    expect(isValid(params as unknown as string)).toBe(expected);
  });
});
