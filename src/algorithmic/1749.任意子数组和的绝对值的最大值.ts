/**
 * Created by Zero<mobius_pan@yeah.net> on 2023/8/6 8:44 下午.
 * @see https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/
 */
export const maxAbsoluteSum = (nums: number[]) => {
  let pSum = 0;
  let min = 0;
  let max = 0;
  nums.forEach((item) => {
    pSum += item;
    min = Math.min(min, pSum);
    max = Math.max(max, pSum);
  });
  return max - min;
};
