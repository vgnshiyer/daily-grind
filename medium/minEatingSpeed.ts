function minEatingSpeed(piles: number[], h: number): number {
  let l = Math.min(...piles), r = Math.max(...piles);
  const maxHoursNeeded = (k: number): number => {
    let hours: number = 0;
    for (const bananas of piles) {
      hours += Math.round((bananas + (k - 1)) / k);
    }
    return hours;
  }

  while (l < r) {
    let m = (l + r) >> 1;
    if (maxHoursNeeded(m) > h) l = m + 1;
    else r = m;
  }
  return l;
}
