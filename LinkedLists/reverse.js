const { LinkedNode } = require("./LinkedNode");

module.exports = {
  reverse: (headNode) => {
    let currentNode = headNode;

    let newHead = null;

    while (currentNode != null) {
      const newNode = new LinkedNode(currentNode.data);
      newNode.next = newHead;
      newHead = newNode;
      currentNode = currentNode.next;
    }

    return newHead;
  }
};