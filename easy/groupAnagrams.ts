function groupAnagrams(strs: string[]): string[][] {
    const anagrams: Map<string, string[]> = new Map();
    for (let s of strs) {
        const sorted_s = s.split("").sort().join("");
        if (anagrams.has(sorted_s)) {
            anagrams.get(sorted_s)!.push(s);
        } else {
            anagrams.set(sorted_s, [s]);
        }
    }
    const output: string[][] = [];
    anagrams.forEach((values, _) => {
        output.push(values);
    });
    return output;
}