/**
 * Created by Zero<mobius_pan@yeah.net> on 2020/7/10 8:44 下午.
 * @see https://leetcode.cn/problems/intersection-of-two-arrays/
 */
const intersection = (num1: number[], num2: number[]) => {
  const map: Map<number, boolean> = new Map();
  return num1.filter((num: number) => {
    if (!map.has(num) && num2.includes(num)) {
      map.set(num, true);
      return true;
    }
  });
};
