import { climbStairs } from 'src/algorithmic/0070.爬楼梯';
import { describe, expect, it } from 'vitest';
describe('climbStairs', () => {
  it('1', () => {
    expect(climbStairs(1)).toBe(1);
  });
  it('2', () => {
    expect(climbStairs(2)).toBe(2);
  });
  it('3', () => {
    expect(climbStairs(3)).toBe(3);
  });
  it('4', () => {
    expect(climbStairs(4)).toBe(5);
  });
});
