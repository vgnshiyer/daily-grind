class Node:
    """
    Node that stores pointers to next node.

    Attributes:
        next: Node
        prev: Node
        val: int
    """

    def __init__(self, val: int) -> None:
        self.val = val
        self.next = None
        self.prev = None


class MyCircularDeque:
    """
    Double ended queue (dequeue).
    """

    def __init__(self, k: int) -> None:
        self.size = 0
        self.capacity = k
        self.head = Node(0)
        self.last = Node(0)

        self.head.next = self.last
        self.last.prev = self.head

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False

        self.size += 1
        new = Node(val=value)

        tmp = self.head.next
        self.head.next = new
        new.next = tmp
        new.prev = self.head
        tmp.prev = new
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False

        self.size += 1
        new = Node(val=value)

        tmp = self.last.prev
        self.last.prev = new
        new.prev = tmp
        new.next = self.last
        tmp.next = new
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False

        self.size -= 1
        tmp = self.head.next.next
        tmp.prev = self.head
        self.head.next = tmp
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False

        self.size -= 1
        tmp = self.last.prev.prev
        tmp.next = self.last
        self.last.prev = tmp
        return True

    def getFront(self) -> int:
        if self.isEmpty():
            return -1
        return self.head.next.val

    def getRear(self) -> int:
        if self.isEmpty():
            return -1
        return self.last.prev.val

    def isEmpty(self) -> bool:
        return self.size <= 0

    def isFull(self) -> bool:
        return self.size == self.capacity
