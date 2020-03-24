/**
 * Created by Mobius on 2020/3/24 21:32.
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
const maxProfit = (prices: number[]): number => {
  let MIN: number = Number.MAX_SAFE_INTEGER;
  let MAX_SUM: number = 0;
  // tslint:disable-next-line:prefer-for-of
  for (let i: number = 0; i < prices.length; i ++) {
    const CURRENT_VALUE: number = prices[ i ];
    if (CURRENT_VALUE < MIN) {
      MIN = CURRENT_VALUE;
      continue;
    }
    MAX_SUM = Math.max(CURRENT_VALUE - MIN, MAX_SUM);
  }
  return MAX_SUM;
};
// tslint:disable-next-line:no-magic-numbers
const r: number = maxProfit([ 7, 1, 5, 3, 6, 4 ]);
console.log(r);
