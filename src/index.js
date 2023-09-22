import Tree from './modules/Tree';
import KnightMoves from './modules/KnightMoves';
import Gameboard from './modules/Gameboard';

const board = new Gameboard(8, 8);
const start = [0, 0];
const end = [1, 2];

const moves = KnightMoves.getMovesRecursive(start);
const movesTree = new Tree(moves);
movesTree.prettyPrint(movesTree.root);
console.log(KnightMoves.getMovesRecursive(start));
