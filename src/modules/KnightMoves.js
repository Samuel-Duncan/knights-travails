import Tree from './Tree';
import Queue from './Queue';

// Function to Build the Tree (Generate Moves):
// This function should take the current position as input and generate all
// possible moves from that position. It can be a recursive function that
// explores the tree, generating child nodes for each valid move.
// The function should return the tree structure.

// Function to Search the Tree: This function should take the tree structure
// and the starting and ending positions as input. It uses a search
// algorithm (e.g., BFS or DFS) to traverse the tree and find the shortest
// path from the starting position to the ending position.

// Main Function: This is the entry point of your program. It should call the
// "Build Tree" function to create the tree and then call the "Search Tree"
// function to find the shortest path. Finally, it should return or display
// the path.

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

    // Return array containing only valid moves
    const validMoves = moves.filter((move) => move.every(checkMoves));
    // Cleanse duplicates
    return validMoves.filter((item, index) => validMoves.indexOf(item) === index);
  }

  static getMovesRecursive(
    start,
    moves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
    ],
    allMoves = [],
  ) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
      console.error('starting coordinates must be within 0-7');
      return;
    }

    if (moves.length <= 0) {
      return;
    }
    const move = moves.pop();
    const newX = start[0] + move[0];
    const newY = start[1] + move[1];
    const newMove = [newX, newY];
    allMoves.push(newMove);
    this.getMovesRecursive(start, moves, allMoves);

    const validMoves = KnightMoves.filterMoves(allMoves);
    validMoves.sort();
    const mid = Math.floor((validMoves.length / 2));
    validMoves.splice(mid, 0, start);

    return validMoves;
  }

  static getMovesLoop(start) {
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

    const allMoves = [];

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const newX = start[0] + move[0];
      const newY = start[1] + move[1];
      const newMove = [newX, newY];

      if (KnightMoves.filterMoves(newMove)) {
        allMoves.push(newMove);
      }
    }

    return allMoves;
  }

  static getMoves(start) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
      console.error('starting coordinates must be within 0-7');
      return;
    }

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

    const validMoves = KnightMoves.filterMoves(allMoves);
    const mid = Math.floor((validMoves.length / 2));
    validMoves.splice(mid, 0, start);
    const movesTree = new Tree(validMoves);

    return movesTree;
  }

  static findPath(start, end, path = []) {
    if (JSON.stringify(start) === JSON.stringify(end) || start == null) {
      return path;
    }

    const queue = new Queue();
    queue.enqueue(start);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      path.push(current.data);

      if (current.left != null) {
        queue.enqueue(current.left);
      }
      if (current.right != null) {
        queue.enqueue(current.right);
      }
    }

    return path;
  }
}
