/**
 * Created by Mobius on 2020/3/24 22:29.
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 */
const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const len1: number = nums1.length;
  const len2: number = nums2.length;
  const nums = [ ...nums1, ...nums2 ].sort((a: number, b: number) => a - b);
  const len = len1 + len2;
  if (!(len % 2)) {
    const harf = len / 2;
    return (nums[ harf - 1 ] + nums[ harf ]) / 2;
  } else {
    const harf = (len - 1) / 2;
    return nums[ harf ];
  }
};
