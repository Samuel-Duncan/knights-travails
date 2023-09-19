import Tree from './Tree';

export default class KnightMoves {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  static checkMove(move) {
    if (move < 0 || move > 7) {
      return false;
    }
    return true;
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

    return allMoves.filter((move) => move.every(KnightMoves.checkMove));
  }
}
