import Tree from './modules/Tree';
import KnightMoves from './modules/KnightMoves';
import Gameboard from './modules/Gameboard';

const board = new Gameboard(8, 8);
const newTree = new Tree(board.board);
newTree.prettyPrint(newTree.tree);

console.log(KnightMoves.getMoves([3, 3]));
