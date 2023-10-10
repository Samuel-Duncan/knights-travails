import KnightMoves from './modules/KnightMoves';

const start = [0, 0];
const end = [4, 3];
const knight = new KnightMoves(start, end);
console.log(knight.moves);
knight.searchMoves();
