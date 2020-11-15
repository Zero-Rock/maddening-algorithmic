/**
 * Created by Mobius on 2020/3/24 22:22.
 * @see https://leetcode-cn.com/problems/plus-one/
 */
import { Num } from './common/enum';

const plusOne = (digits: number[]): number[] => {
  const digitsLen: number = digits.length;
  digits[ digitsLen - 1 ] ++;
  for (let i = digitsLen - 1; i >= 0; i --) {
    if (digits[ i ] === Num.ten) {
      digits[ i ] = 0;
      if (i === 0) {
        digits.unshift(1);
      } else {
        digits[ i - 1 ] ++;
      }
    } else {
      break;
    }
  }
  return digits;
};
