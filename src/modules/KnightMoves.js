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
    this.moves = this.getMoves(start);
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
    root = new Node(start),
  ) {
    if (moves.length < 1) {
      return root;
    }

    const move = moves.shift();
    const newX = start[0] + move[0];
    const newY = start[1] + move[1];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      const newMove = [newX, newY];
      root.add(newMove);
    }

    return this.getMoves(start, moves, root);
  }

  // Level Order
  searchMoves(start, end, moves = this.moves) {
    if (moves == null) {
      return;
    }

    const q = new Queue();
    q.enqueue(moves);

    while (!q.isEmpty()) {
      let n = q.size();

      while (n > 0) {
        const p = q.dequeue();
        if (p == null) {
          return;
        }
        console.log(p.data);

        for (let i = 0; i < p.descendants.length; i++) {
          q.enqueue(p.descendants[i]);
          n--;
          // if (JSON.stringify(p.data) !== JSON.stringify(end)) {
          //   p.descendants[i].add(this.getMoves(p.descendants[i].data));
          // }
        }
      }
    }
  }
}
