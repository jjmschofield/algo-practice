// @flow
const { LinkedListNode } = require("./LinkedListNode");

module.exports = {
    reverse: (headNode: LinkedListNode) => {
        let currentNode = headNode;

        let newHead : ?LinkedListNode = null;

        while (currentNode != null) {
            const newNode = new LinkedListNode(currentNode.data);
            newNode.next = newHead;
            newHead = newNode;
            currentNode = currentNode.next;
        }

        return newHead;
    }
};
