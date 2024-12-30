function carFleet(target: number, position: number[], speed: number[]): number {
  const time: number[] = [];
  position.map((p, i) => [p, speed[i]])
    .sort((a, b) => a[0] - b[0])
    .forEach(([p, s]) => {
      time.push((target - p) / s);
    });
  const stack: number[] = [];

  let numFleets: number = 0;
  for (let i = 0; i < position.length; i++) {
    if (stack.length && time[i] >= stack[stack.length - 1]) {
      stack.push(time[i]);
    } else {
      while (stack.length && stack[stack.length - 1] >= time[i]) stack.pop();
      numFleets++;
      stack.push(time[i]);
    }
  }
  return numFleets;
}
