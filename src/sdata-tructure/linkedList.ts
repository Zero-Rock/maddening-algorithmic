class Nodes<T = any> {
  element: T;
  next?: Nodes;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  private count: number;
  private head?: Nodes;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push<T>(element: T) {
    const node = new Nodes<T>(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      const current = this.head!;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1)!;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf<T>(element: T, equal: (a: T, b: T) => boolean) {
    const equalsFn = equal || ((a: T, b: T) => a === b);
    let current = this.head; // {1}
    for (let i = 0; i < this.count && current != null; i++) {
      if (equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
}
