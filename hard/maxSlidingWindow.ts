class MyQueue<T> {
    private items: T[] = [];

    public enqueue(item: T): void {
        this.items.push(item);
    }

    public leftDequeue(): T | undefined {
        return this.items.shift();
    }

    public rightDequeue(): T | undefined {
        return this.items.pop();
    }

    public rightPeek(): T {
        return this.items[this.size() - 1];
    }

    public leftPeek(): T {
        return this.items[0];
    }

    public isEmpty(): Boolean {
        return this.items.length === 0;
    }

    public size(): number {
        return this.items.length;
    }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: MyQueue<number> = new MyQueue();
    const maxes: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[queue.rightPeek()] < nums[i]) queue.rightDequeue();
        queue.enqueue(i);
        while (queue.leftPeek() < i - k + 1) queue.leftDequeue();
        if (i - k + 1 >= 0) maxes.push(nums[queue.leftPeek()]);
    }
    return maxes;
};

