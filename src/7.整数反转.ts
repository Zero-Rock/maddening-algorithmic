import { Num } from './common/enum';
/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/10/24 3:30 下午.
 * @see https://leetcode-cn.com/problems/reverse-integer/
 */
const reverse = (num: number): number => {
  let result = 0;
  let temp = num;
  while (temp !== 0) {
    result = result * Num.ten + temp % Num.ten;
    temp = (temp / Num.ten) | 0;
  }
  return (result | 0) === result ? result : 0;
};
