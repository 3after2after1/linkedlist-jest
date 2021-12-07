class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length = this.length + 1;
  }

  getIndexBy(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  removeHead() {
    this.head = this.head.next;
    this.length = this.length - 1;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();
    let prev = this.getIndexBy(index - 1);
    if (prev === null) return null;
    prev.next = prev.next.next;
    this.length = this.length - 1;
  }

  insertAtIndex(index, value) {
    if (!(index < 0 || index >= this.length)) {
      if (index === 0) return this.insertAtHead(value);
      let prev = this.getIndexBy(index - 1);
      prev.next = new LinkedListNode(value, prev.next);
      this.length = this.length + 1;
    }
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} --> `;
      current = current.next;
    }

    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }

  return ll;
};

module.exports = LinkedList;
