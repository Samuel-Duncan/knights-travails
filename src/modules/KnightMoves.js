import Tree from './Tree';
import Node from './Node';
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
    this.movesFromStart = new Node(start);
  }

  static checkStart(start) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
      return true;
    }
    return false;
  }

  static filterMoves(moves) {
    const uniqueMoves = moves.filter((item, index, self) => {
      const jsonString = JSON.stringify(item);
      return self.findIndex((otherItem) => JSON.stringify(otherItem) === jsonString) === index;
    });

    return uniqueMoves;
  }

  getMoves(
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
  ) {
    if (moves.length < 1) {
      return this.movesFromStart;
    }

    const move = moves.pop();
    const newX = start[0] + move[0];
    const newY = start[1] + move[1];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      const newMove = [newX, newY];
      this.movesFromStart.add(newMove);
    }

    return this.getMoves(start, moves, this.movesFromStart);
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
