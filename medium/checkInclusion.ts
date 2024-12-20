function checkInclusion(s1: string, s2: string): boolean {
    const countMap: Map<string, number> = new Map();
    Array.from(s1).map((char) => {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    });
    const allZero = (countMap: Map<string, number>): boolean => (
        Array.from(countMap.values()).every((count) => count <= 0)
    );

    for (let r = 0, l = 0; r < s2.length; r++) {
        countMap.set(s2[r], (countMap.get(s2[r]) || 0) - 1);
        while (r - l + 1 > s1.length) {
            countMap.set(s2[l], (countMap.get(s2[l]) || 0) + 1);
            l++;
        }
        if (allZero(countMap)) {
            return true;
        }
    }
    return false;
};
