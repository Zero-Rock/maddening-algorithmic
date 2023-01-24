/**
 * Created by Zero<mobius_pan@yeah.net> on 2023/1/24 11:13.
 * @see https://leetcode.cn/problems/divide-two-integers/
 */

const leftRange = -(2 ** 31);
const rightRange = 2 ** 31 - 1;
const halfLeftRange = -(2 ** 30);

const core = (dividend: number, divisor: number): number => {
  let result = 0;
  while (dividend <= divisor) {
    let value = divisor;
    let quotient = 1;
    while (value >= halfLeftRange && dividend <= value + value) {
      quotient += quotient;
      value += value;
    }
    result += quotient;
    dividend -= value;
  }
  return result;
};

export const divide = (dividend: number, divisor: number): number => {
  if (dividend === leftRange && divisor === -1) {
    return rightRange;
  }
  let negative = 2;
  if (dividend > 0) {
    negative--;
    dividend = -dividend;
  }
  if (divisor > 0) {
    negative--;
    divisor = -divisor;
  }
  const result = core(dividend, divisor);
  return negative === 1 ? -result : result;
};
