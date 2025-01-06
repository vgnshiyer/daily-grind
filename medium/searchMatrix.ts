function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length, m = matrix[0].length;
  let l = 0, r = n * m - 1;
  const getRow = (n: number): number => Math.floor(n / m);
  const getCol = (n: number): number => n % m;

  while (l < r) {
    const m = (l + r) >> 1;
    if (matrix[getRow(m)][getCol(m)] < target) l = m + 1;
    else r = m;
  }
  return matrix[getRow(m)][getCol(m)] === target;
}
