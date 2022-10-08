/**
 * Created by Zero<mobius_pan@yeah.net> on 2022/6/16 23:02.
 * @see https://leetcode.cn/problems/add-two-numbers
 */
import { Num } from './common/enum';

export class ListNode {
  public val: number | null;
  public next: ListNode | null;

  constructor(val?: number | null, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const result = new ListNode(null);
  let next = result;
  let carryNum = 0;
  let currSum = 0;
  let num1 = 0;
  let num2 = 0;

  while (l1 !== null || l2 !== null) {
    // @ts-ignore
    num1 = l1 !== null ? l1.val : Num.zero;
    // @ts-ignore
    num2 = l2 !== null ? l2.val : 0;
    currSum = (num1 + num2 + carryNum) % Num.ten;
    carryNum = Math.floor((num1 + num2 + carryNum) / Num.ten);
    next.next = new ListNode(currSum);
    next = next.next;
    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
  }
  if (carryNum) {
    next.next = new ListNode(carryNum);
  }
  return result.next;
};
