// @flow
class LinkedListNode {
    data: number;
    next: ?LinkedListNode;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

module.exports = {
    LinkedListNode
};
