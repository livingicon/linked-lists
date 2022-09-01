// LINKED LIST CLASS
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    let appendNode = new Node(value);
    appendNode.nextNode = null;
    let tailNode = this.head;
    while (tailNode.nextNode) {
      tailNode = tailNode.nextNode;
    }
    tailNode.nextNode = appendNode;
    return appendNode;
  }

  prepend(value) {
    let prependNode = new Node(value);
    prependNode.nextNode = this.head;
    this.head = prependNode;
    return prependNode;
  }

  size() {
    let sizeCount = 0; 
    let node = this.head;
    while (node) {
        sizeCount++;
        node = node.nextNode;
    }
    return sizeCount;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let node = this.head;
    while (node.nextNode) {
        node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let positionCount = 0; 
    let node = this.head;
    while(positionCount != index) {
      positionCount++;
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    let current = this.head;
    let next = this.head.nextNode;
    while (next.nextNode) {
        next = next.nextNode;
        current = current.nextNode;
    }
    current.nextNode = null;
    return list;
  }

  contains(value) {
    let node = this.head;
    let array = [];
    while(node) {
      array.push(node.value);
      node = node.nextNode;
    } 
    return array.includes(value);
  }

  contains2(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    let node = this.head;
    let array = [];
    while(node) {
      array.push(node.value);
      node = node.nextNode;
    } 
    if (array.indexOf(value) !== -1) {
      return array.indexOf(value);
    } else {
      return null;
    }
  }

  find2(value) {
    let indexCounter = 0;
    let node = this.head;
    while (node) {
      if (node.value === value) return indexCounter;
      node = node.nextNode;
      indexCounter++;
    }
    return null;
  }

  toString() {
    let node = this.head;
    let array = [];
    while(node) {
      array.push(`( ${node.value} ) -> `);
      node = node.nextNode;
    }
    array.push('null');
    return array.join("");
  }

  toString2() {
    let node = this.head;
    let string = "";
    while (node) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    return `${string}null`;
  }

};

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
};


// LIST CREATION
let node1 = new Node(2); // create node1
let node2 = new Node(5); // create node2
let node3 = new Node(8);
node1.nextNode = node2; // create pointer from node1 to node2
node2.nextNode = node3;

let list = new LinkedList(node1); // create a linked list with node1

// LIST METHOD TESTS
console.log(list.append(10));
console.log(list.prepend(1));
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(3)); // 1,2,5,8,10
console.log(list.pop()); // 1,2,5,8
console.log(list.contains(8));
console.log(list.contains2(8));
console.log(list.find(2)); // 1,2,5,8
console.log(list.find2(3));
console.log(list.toString());
console.log(list.toString2());