// tslint:disable:no-magic-numbers
import { addTwoNumbers, ListNode } from 'src/algorithmic/0002.两数相加';
import { describe, expect, test } from 'vitest';

const l11 = new ListNode(6, null);
const l12 = new ListNode(5, l11);
const l13 = new ListNode(1, l12);

describe('两数相加', () => {
  test('should be worked well', () => {
    expect(addTwoNumbers(l13, l13)).toMatchSnapshot();
  });
});
