import { findMedianSortedArrays } from 'src/algorithmic/0004.寻找两个有序数组的中位数';
import { describe, it, expect } from 'vitest';

describe('寻找两个正序数组的中位数', () => {
  const cases = [
    [[1, 3], [2], 2],
    [[1, 3], [2, 4], 2.5],
  ];
  it.each(cases)('findMedianSortedArrays(%s, %s) should be %s', (nums1, nums2, expected) => {
    expect(findMedianSortedArrays(nums1 as number[], nums2 as number[])).toBe(expected);
  });
});
