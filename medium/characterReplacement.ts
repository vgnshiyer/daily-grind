class FrequencyArray {
    countArray: number[];
    maxItem: number;

    constructor() {
        this.countArray = Array(26).fill(0)
        this.maxItem = 0;
    }

    private getCharIndex = (char: string): number => char.charCodeAt(0) - "A".charCodeAt(0);

    public addItem(char: string) {
        const idx = this.getCharIndex(char);
        this.countArray[idx]++;
        this.maxItem = Math.max(this.maxItem, this.countArray[idx]);
    }

    public removeItem(char: string) {
        const idx = this.getCharIndex(char);
        this.countArray[idx]--;

        this.maxItem = 0;
        for (let i = 0; i < 26; i++) {
            this.maxItem = Math.max(this.maxItem, this.countArray[i]);
        }
    }

    public getMaxFrequency = (): number => this.maxItem;
}

function characterReplacement(s: string, k: number): number {
    const frequnceArray: FrequencyArray = new FrequencyArray();
    let maxLength = 0;
    for (let l = 0, r = 0; r < s.length; r++) {
        frequnceArray.addItem(s[r]);
        while ((r - l + 1) - frequnceArray.getMaxFrequency() > k) {
            frequnceArray.removeItem(s[l++]);
        }
        maxLength = Math.max(maxLength, r - l + 1);
    }
    return maxLength;
}
