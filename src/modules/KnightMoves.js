import Tree from './Tree';

export default class KnightMoves {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  static filterMoves(moves) {
    const checkMoves = (num) => {
      if (num < 0 || num > 7) {
        return false;
      }
      return true;
    };

    return moves.filter((move) => move.every(checkMoves));
  }

  static getMoves(start) {
    const moves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
    ];

    const allMoves = moves.map((move) => [
      start[0] + move[0],
      start[1] + move[1],
    ]);

    allMoves.push(start);

    return KnightMoves.filterMoves(allMoves);
  }
}
