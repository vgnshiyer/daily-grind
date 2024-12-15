function longestConsecutive(nums: number[]): number {
    let longestLength: number = 0;
    const seen: Set<number> = new Set(nums);
    for (let n of nums) {
        let current: number = 1;
        if (seen.has(n - 1)) {
            longestLength = Math.max(longestLength, current);
            continue; // this is already a part of a consecutive sequence that was checked b4
        } else {
            for (let i = n + 1; seen.has(i); i++) {
                current++;
            }
            longestLength = Math.max(longestLength, current);
        }
    }
    return longestLength;
};
