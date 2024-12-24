import { isValid } from "../easy/validParentheses";

function generateParenthesis(n: number): string[] {
  const parentheses: string[] = [];

  const dfs = (opening: number, closing: number, str: string) => {
    if (!opening && !closing) {
      if (isValid(str)) {
        parentheses.push(str);
        return
      }
    }

    if (opening) dfs(opening - 1, closing, str + "(")
    if (closing) dfs(opening, closing - 1, str + ")")
  }

  dfs(n, n, "");
  return parentheses;
}
