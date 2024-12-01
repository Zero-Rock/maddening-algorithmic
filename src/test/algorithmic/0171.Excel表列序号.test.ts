import { titleToNumber } from 'src/algorithmic/0171.Excel表列序号';
import { describe, expect, it } from 'vitest';

describe('0171.Excel表列序号', () => {
  it('should return', () => {
    expect(titleToNumber('A')).toBe(1);
  });
});
