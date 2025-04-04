/**
 * Created by Zero on 2020/3/24 22:29.
 * @see https://leetcode.cn/problems/median-of-two-sorted-arrays
 */
export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const len1: number = nums1.length;
  const len2: number = nums2.length;
  const nums = [...nums1, ...nums2].sort((a: number, b: number) => a - b);
  const len = len1 + len2;
  if (!(len % 2)) {
    const half = len / 2;
    return (nums[half - 1] + nums[half]) / 2;
  } else {
    const half = (len - 1) / 2;
    return nums[half];
  }
};
