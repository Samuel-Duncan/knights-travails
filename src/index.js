import Tree from './modules/Tree';
import KnightMoves from './modules/KnightMoves';

const start = [3, 3];
const end = [4, 3];
const knight = new KnightMoves(start, end);
knight.getMoves(knight.start);
console.log(knight.movesFromStart);
