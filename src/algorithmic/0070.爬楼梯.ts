/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */
export const climbStairs = (n: number): number => {
  if (n <= 2) {
    return n;
  }
  // n-2 层的走法
  let a = 1;
  // n-1 层的走法
  let b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

//

export const climbStairs2 = (n: number, memo = new Map()): number => {
  if (n <= 2) {
    return n;
  }
  if (memo.has(n)) {
    return memo.get(n)!;
  }
  const result = climbStairs2(n - 1, memo) + climbStairs2(n - 2, memo);
  memo.set(n, result);
  return result;
};
