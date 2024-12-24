function evalRPN(tokens: string[]): number {
  const numbers: number[] = [];
  const isOperator = (token: string): boolean => token === "+" || token === "-" || token === "/" || token === "*";
  const evaluate_expr = (op1: number, op2: number, op: string): number => {
    if (op === "+") return op1 + op2;
    if (op === "-") return op2 - op1;
    if (op === "/") {
      const ret = Math.floor(Math.abs(op2) / Math.abs(op1));
      if ((op1 < 0 && op2 >= 0) || (op2 < 0 && op1 >= 0)) return -ret;
      return ret
    };
    if (op === "*") return op1 * op2;
    return 0;
  }

  for (let token of tokens) {
    if (!isOperator(token)) {
      numbers.push(parseInt(token));
    } else {
      const a = numbers.pop()!, b = numbers.pop()!;
      numbers.push(evaluate_expr(a, b, token));
    }
  }
  return numbers.pop()!;
}

