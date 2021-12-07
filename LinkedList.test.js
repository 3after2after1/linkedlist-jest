const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("It adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than zero", () => {
    test("It returns null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getIndexBy(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("It returns null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getIndexBy(3)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getIndexBy(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("it returns the element at the index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getIndexBy(2).value).toBe(30);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("with index less than zero", () => {
    test("It does not insert anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    test("It does not insert anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(4, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index zero", () => {
    test("insert at the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });
  describe("with index in the middle", () => {
    test("insert at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);

      const node = ll.getIndexBy(2);
      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe("#removes head", () => {
  test("removes the head", () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();
    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(30);
    expect(ll.length).toBe(2);
  });
});

describe("#removeAtIndex", () => {
  describe("with index less than zero", () => {
    test("It does not remove anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    test("It does not remove anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(4);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index zero", () => {
    test("remove the head", () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);
      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index in the middle", () => {
    test("remove at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);

      const node = ll.getIndexBy(1);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});
