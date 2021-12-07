const LinkedList = require("./LinkedList");

const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);

const ll2 = LinkedList.fromValues(10, 20, 30, 40);
ll2.print();
ll2.insertAtIndex(2, 50);
ll2.print();
