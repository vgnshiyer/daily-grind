/**
    * This data structure maintains a window with a length and the actual string in that window.
*/
class SlidingWindow {
    substring: string  // the substring
    n: number  // length of the window

    constructor(substring: string) {
        this.substring = substring;
        this.n = this.substring.length;
    }

    public updateSubstring = (substring: string, len: number) => {
        if (len < this.n) {
            this.substring = substring;
            this.n = len;
        }
    }
}

function minWindow(s: string, t: string): string {
    const countMap: Map<string, number> = new Map();
    Array.from(t).map((char) => {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    });
    const allZero = (countMap: Map<string, number>): boolean => (
        Array.from(countMap.values()).every((count) => count <= 0)
    );
    const slidingWindow = new SlidingWindow(s);
    let found = false;

    for (let l = 0, r = 0; r < s.length; r++) {
        countMap.set(s[r], (countMap.get(s[r]) || 0) - 1);
        while (allZero(countMap)) {
            // try to shorten the window to find a better answer
            found = true;
            const substring: string = s.slice(l, r + 1);
            slidingWindow.updateSubstring(substring, substring.length);
            countMap.set(s[l], (countMap.get(s[l]) || 0) + 1);
            l++;
        }
    }
    return found ? slidingWindow.substring : "";
};
