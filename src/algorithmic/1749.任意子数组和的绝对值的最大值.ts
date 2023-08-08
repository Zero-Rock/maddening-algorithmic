/**
 * Created by Zero<mobius_pan@yeah.net> on 2023/8/6 8:44 下午.
 * @see https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/
 */
export const maxAbsoluteSum = (nums: number[]) => {
  let pSum = 0;
  let min = 0;
  let max = 0;
  let temp: { item: number; pSum: number; min: number; max: number }[] = [];
  nums.forEach((item) => {
    pSum += item;
    min = Math.min(min, pSum);
    max = Math.max(max, pSum);
    temp.push({ item, pSum, min, max });
  });
  console.table(temp);
  return max - min;
};
maxAbsoluteSum([2, -5, 1, -4, 3, -2]);
