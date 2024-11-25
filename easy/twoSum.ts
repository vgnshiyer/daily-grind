function twoSum(nums: number[], target: number): number[] {
    let seen: Map<number, number> = new Map();
    for (const [i, n] of nums.entries()) { // destructure the index and the element in the array
        if (seen.has(target - n)) {
            return [seen.get(target - n)!, i]; // ! --> tells typescript that I already checked if value exists with has and trust that get will return a number
        }
        seen.set(n, i);
    }
    return [-1, -1];
};