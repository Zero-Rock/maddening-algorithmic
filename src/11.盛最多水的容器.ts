/**
 * Created by Mobius on 2020/3/24 22:42.
 * @see https://leetcode-cn.com/problems/container-with-most-water/
 */
const maxArea = (height: number[]): number => {
  let max: number = 0;
  let i: number = 0;
  let j: number = height.length - 1;
  while (i < j) {
    const min: number = height[ i ] < height [ j ] ? height[ i ++ ] : height[ j -- ];
    const area: number = (j - i + 1) * min;
    max = Math.max(area, max);
  }
  return max;
};
