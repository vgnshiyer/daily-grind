function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const pre: number[] = Array(n).fill(1);
    const suf: number[] = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suf[i] = suf[i + 1] * nums[i + 1];
    }

    const output: number[] = Array(n);
    for (let i = 0; i < n; i++) {
        output[i] = pre[i] * suf[i];
    }
    return output;
};
