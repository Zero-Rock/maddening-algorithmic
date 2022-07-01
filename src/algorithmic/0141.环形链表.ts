class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const hasCycle = (head: ListNode | null): boolean => {
  // 快慢指针
  let tortoise = head;
  let rabbit = head;
  while (rabbit && rabbit.next) {
    tortoise = tortoise?.next!;
    rabbit = rabbit.next.next;
    // 如果指针能够相逢，那么链表就有环
    if (tortoise === rabbit) {
      return true;
    }
  }
  return false;
};
