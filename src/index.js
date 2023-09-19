import Tree from './modules/Tree';
import KnightMoves from './modules/KnightMoves';
import Gameboard from './modules/Gameboard';

const board = new Gameboard(8, 8);
const start = [3, 3];
const newTree = new Tree(KnightMoves.getMoves(start));
newTree.prettyPrint(newTree.tree);
