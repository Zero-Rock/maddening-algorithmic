/**
 * Created by Zero<mobius_pan@yeah.net> on 2024/3/2 00:25.
 */
import { plusOne } from 'src/algorithmic/0066.加一';
import { describe, expect, it } from 'vitest';

describe('0066.加一', () => {
  const cases: number[][][] = [
    [
      [1, 2, 3],
      [1, 2, 4],
    ],
    [
      [4, 3, 2, 1],
      [4, 3, 2, 2],
    ],
    [[0], [1]],
  ];
  it.each(cases)('plusOne(%s) should be %s', (input, output) => {
    expect(plusOne(input)).toEqual(output);
  });
});
