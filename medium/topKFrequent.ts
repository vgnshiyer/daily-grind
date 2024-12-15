function topKFrequent(nums: number[], k: number): number[] {
    const countMap: Map<number, number> = new Map();
    for (let n of nums) {
        countMap.set(n, (countMap.get(n) || 0) + 1);
    }
    let uniqueNums: number[] = Array.from(countMap.keys());
    uniqueNums.sort((a, b) => {
        const f1 = countMap.get(a)!;
        const f2 = countMap.get(b)!;

        return f1 == f2 ? a - b : f2 - f1;
    });

    return uniqueNums.slice(0, k);
};
