function checkRows(row: number, col: number, num: string, board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        if (i != col && board[row][i] == num) { return false; }
    }
    return true;
}

function checkCols(row: number, col: number, num: string, board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        if (i != row && board[i][col] == num) { return false; }
    }
    return true;
}

function checkBox(row: number, col: number, num: string, board: string[][]): boolean {
    const startRow: number = Math.floor(row / 3) * 3;
    const startCol: number = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; i < startCol + 3; i++) {
            if (i != row && j != col && board[i][j] == num) { return false; }
        }
    }
    return true;
}

function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") { continue; }
            if (!checkRows(i, j, board[i][j], board)) { return false; }
            if (!checkCols(i, j, board[i][j], board)) { return false; }
            if (!checkBox(i, j, board[i][j], board)) { return false; }
        }
    }
    return true;
};