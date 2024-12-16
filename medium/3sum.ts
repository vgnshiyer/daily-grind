function threeSum(nums: number[]): number[][] {
    const triplets: number[][] = [];
    nums.sort((a, b) => a - b);  // js/ts sorts by strings by default?? -> wasted so much time due to this
    for (let i = 0; i < nums.length; i++) {
        if (i >= 1 && nums[i] == nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            const sum: number = nums[i] + nums[j] + nums[k];
            if (sum < 0) j++;
            else if (sum > 0) k--;
            else {
                triplets.push([nums[i], nums[j++], nums[k--]]);
                while (j >= 1 && j < k && nums[j] === nums[j - 1]) j++;
                while (k < nums.length - 1 && j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return triplets;
};
