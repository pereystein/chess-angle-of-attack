const WHITE_KING = '\u2654';
const WHITE_QUEEN = '\u2655';
const WHITE_ROOK = '\u2656';
const WHITE_BISHOP = '\u2657';
const WHITE_KNIGHT = '\u2658';
const WHITE_PAWN = '\u2659';

const BLACK_KING = '\u265A';
const BLACK_QUEEN = '\u265B';
const BLACK_ROOK = '\u265C';
const BLACK_BISHOP = '\u265D';
const BLACK_KNIGHT = '\u265E';
const BLACK_PAWN = '\u265F';

let pieces: any = [];

pieces["K"] = WHITE_KING;
pieces["Q"] = WHITE_QUEEN;
pieces["R"] = WHITE_ROOK;
pieces["B"] = WHITE_BISHOP;
pieces["N"] = WHITE_KNIGHT;
pieces["P"] = WHITE_PAWN;

pieces["k"] = BLACK_KING;
pieces["q"] = BLACK_QUEEN;
pieces["r"] = BLACK_ROOK;
pieces["b"] = BLACK_BISHOP;
pieces["n"] = BLACK_KNIGHT;
pieces["p"] = BLACK_PAWN;

export default pieces;