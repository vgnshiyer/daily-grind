class CustomStack:

    def __init__(self, maxSize: int):
        self.stack = [-1] * maxSize
        self.size = maxSize
        self.cur_size = 0

    def push(self, x: int) -> None:
        if self.cur_size == self.size:
            return
        self.stack[self.cur_size] = x
        self.cur_size += 1

    def pop(self) -> int:
        if self.cur_size == 0:
           return -1
        self.cur_size -= 1
        return self.stack[self.cur_size]

    def increment(self, k: int, val: int) -> None:
        for i in range(min(self.cur_size, k)):
            self.stack[i] += val
