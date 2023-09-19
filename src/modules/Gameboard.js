export default class Gameboard {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = Gameboard.createBoardRec(rows, columns);
  }

  static createBoardLoop(rows, cols) {
    const chessBoard = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        chessBoard.push([i, j]);
      }
    }

    return chessBoard;
  }

  static createBoardRec(
    rows,
    cols,
    currentRow = 0,
    currentCol = 0,
    chessBoard = [],
  ) {
    if (currentRow === rows) {
      return chessBoard;
    }

    chessBoard.push([currentRow, currentCol]);

    if (currentCol === cols - 1) {
      return this.createBoardRec(rows, cols, currentRow + 1, 0, chessBoard);
    }

    return this.createBoardRec(
      rows,
      cols,
      currentRow,
      currentCol + 1,
      chessBoard,
    );
  }
}
