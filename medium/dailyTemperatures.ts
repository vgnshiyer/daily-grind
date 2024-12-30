function dailyTemperatures(temperatures: number[]): number[] {
  const n: number = temperatures.length;
  const stack: number[] = [];
  stack.push(n - 1);
  const output: number[] = Array(n).fill(0);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) stack.pop();
    output[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }
  return output;
}

