function trap(height: number[]): number {
    let maxLeft = height[0], maxRight = height[height.length - 1];
    let l = 0, r = height.length - 1;
    let water: number = 0;
    while (l < r) {
        if (height[l] < height[r]) {
            l++;
            var waterHere = maxLeft - height[l];
            maxLeft = Math.max(maxLeft, height[l]);
        } else {
            r--;
            var waterHere = maxRight - height[r];
            maxRight = Math.max(maxRight, height[r]);
        }
        water += (waterHere >= 0 ? waterHere : 0);
    }
    return water;
}
