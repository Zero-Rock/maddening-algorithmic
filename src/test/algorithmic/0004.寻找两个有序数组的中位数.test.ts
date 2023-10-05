// tslint:disable:no-magic-numbers
import { findMedianSortedArrays } from 'src/algorithmic/0004.寻找两个有序数组的中位数';
import { describe, expect, it } from 'vitest';
import { n } from 'vitest/dist/reporters-5f784f42';

describe('寻找两个正序数组的中位数', () => {
  const cases: [number[], number[], number][] = [
    [[1, 3], [2], 2],
    [[1, 3], [2, 4], 2.5],
  ];
  it.each(cases)('findMedianSortedArrays(%s, %s) should return %s', (nums1, nums2, expected) => {
    expect(findMedianSortedArrays(nums1, nums2)).toBe(expected);
  });
});
