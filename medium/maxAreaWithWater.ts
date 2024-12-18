function maxArea(height: number[]) {
    const calculateArea = (l: number, r: number): number => {
        const minHeight = Math.min(height[l], height[r]);
        return minHeight * (r - l);
    };

    let l = 0, r = height.length - 1;
    let maxQuantity = 0;
    while (l < r) {
        ;
        maxQuantity = Math.max(maxQuantity, calculateArea(l, r))
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxQuantity;
};
