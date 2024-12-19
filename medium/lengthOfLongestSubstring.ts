function lengthOfLongestSubstring(s: string): number {
    const countMap: Map<string, number> = new Map();
    const allOccurOnce = (countMap: Map<string, number>): Boolean => {
        return Array.from(countMap.values()).every((value) => value <= 1);
    }

    let maxLength: number = 0;
    for (let l = 0, r = 0; r < s.length; r++) {
        countMap.set(s[r], (countMap.get(s[r]) || 0) + 1);
        while (!allOccurOnce(countMap)) {
            countMap.set(s[l], countMap.get(s[l])! - 1);
            if (countMap.get(s[l]) === 0) {
                countMap.delete(s[l]);
            }
            l++;
        }
        maxLength = Math.max(maxLength, r - l + 1);
    }
    return maxLength;
};
