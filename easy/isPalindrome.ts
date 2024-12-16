const isAlNum = (s: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(s);
}

function isPalindrome(s: string): boolean {
    let i = 0, j = s.length - 1;
    for (; i < j; i++, j--) {
        while (i < j && !isAlNum(s[i])) i++;
        while (i < j && !isAlNum(s[j])) j--;
        if (s[i].toLowerCase() != s[j].toLowerCase()) return false;
    }
    return true;
};
