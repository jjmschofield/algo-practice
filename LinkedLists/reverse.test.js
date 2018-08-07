const { LinkedListNode } = require('./LinkedListNode');
const { reverse } = require('./reverse');

describe('linkedLists', () => {
  describe('reverse', function () {
    it('should reverse the linked list 0,1,2 to 2,1,0', function () {
      // Arrange
      const node0 = new LinkedListNode(0);
      const node1 = new LinkedListNode(1);
      const node2 = new LinkedListNode(2);

      node0.next = node1;
      node1.next = node2;

      const expectedNode0 = new LinkedListNode(2);
      const expectedNode1 = new LinkedListNode(1);
      const expectedNode2 = new LinkedListNode(0);

      expectedNode0.next = expectedNode1;
      expectedNode1.next = expectedNode2;

      // Act
      const result = reverse(node0);

      // Assert
      expect(result).toEqual(expectedNode0);
      expect(result.next).toEqual(expectedNode0.next);
      expect(result.next.next).toEqual(expectedNode0.next.next);
      expect([2, 1, 0]).toEqual([expectedNode0.data, expectedNode1.data, expectedNode2.data])
    });

    it('should reverse the linked list 0 to 0', function () {
      // Arrange
      const node0 = new LinkedListNode(0);
      const expectedNode0 = new LinkedListNode(0);

      // Act
      const result = reverse(node0);

      // Assert
      expect(result).toEqual(expectedNode0);
    });
  });
});
