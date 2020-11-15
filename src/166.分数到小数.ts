/**
 * Created by Mobius on 2020/3/24 20:28.
 * @see https://leetcode-cn.com/problems/fraction-to-recurring-decimal/
 */
type Walk = (map: Map<number, number>, remainder: number, remainders: (number | string)[], denominator: number) => any;

// tslint:disable-next-line:no-shadowed-variable
const walk: Walk = (map, remainder, remainders, denominator) => {
  if (!remainder) {
    return remainders;
  }
  let num = 0;
  if (map.has(remainder)) {
    remainders.splice(map.get(remainder) as number, 0, '(');
    remainders.push(')');
    return remainders;
  } else {
    map.set(remainder, remainders.length);
    // tslint:disable-next-line:no-magic-numbers
    remainder *= 10;
    num = Math.floor(remainder / denominator);
    remainder %= denominator;
    remainders.push(num);
    return walk(map, remainder, remainders, denominator);
  }
};

// tslint:disable-next-line:no-shadowed-variable
const fractionToDecimal = (numerator: number, denominator: number): string => {
  // 判断边界denominator
  if (denominator === 0) {
    return '';
  }
  // 判断边界
  if (numerator === 0) {
    return '0';
  }
  // tslint:disable-next-line:no-shadowed-variable
  let result: string = '';
  // @ts-ignore
  if ((denominator < 0) ^ (numerator < 0)) {
    result += '-';
    denominator = Math.abs(denominator);
    numerator = Math.abs(numerator);
  }
  // 整数部分
  const integer: number = Math.floor(numerator / denominator);
  result += integer;
  const remainder: number = numerator % denominator;
  if (remainder) {
    result += '.';
  }
  const remainders: (number | string)[] = [];
  const map: Map<number, number> = new Map();
  const x = walk(map, remainder, remainders, denominator);
  result += x.join('');
  return result;
};
const numerator: number = 1;
const denominator: number = 3;
const result: string = fractionToDecimal(numerator, denominator);
console.log(result);
