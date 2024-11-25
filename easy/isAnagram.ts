function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let count: number[] = Array(26).fill(0);
    for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let c of t) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    return count.every(value => value === 0);
}
