import {Move} from "./Move";

const p = [ // black pawn
    [new Move(1,-1)],
    [new Move(1,1)]
];

const P = [ // white pawn
    [new Move(-1,-1)],
    [new Move(-1,1)]
];

const K = [
    [new Move(-1,-1)],
    [new Move(-1,0)],
    [new Move(-1,1)],
    [new Move(0,-1)],
    [new Move(0,1)],
    [new Move(1,-1)],
    [new Move(1,0)],
    [new Move(1,1)]
];

const Q = [
    [new Move(-1,-1), new Move(-2,-2), new Move(-3,-3), new Move(-4,-4), new Move(-5,-5), new Move(-6,-6), new Move(-7,-7)],
    [new Move(-1,0), new Move(-2,0), new Move(-3,0), new Move(-4,0), new Move(-5,0), new Move(-6,0), new Move(-7,0)],
    [new Move(-1,1), new Move(-2,2), new Move(-3,3), new Move(-4,4), new Move(-5,5), new Move(-6,6), new Move(-7,7)],
    [new Move(0,-1), new Move(0,-2), new Move(0,-3), new Move(0,-4), new Move(0,-5), new Move(0,-6), new Move(0,-7)],
    [new Move(0,1), new Move(0,2), new Move(0,3), new Move(0,4), new Move(0,5), new Move(0,6), new Move(0,7)],
    [new Move(1,-1), new Move(2,-2), new Move(3,-3), new Move(4,-4), new Move(5,-5), new Move(6,-6), new Move(7,-7)],
    [new Move(1,0), new Move(2,0), new Move(3,0), new Move(4,0), new Move(5,0), new Move(6,0), new Move(7,0)],
    [new Move(1,1), new Move(2,2), new Move(3,3), new Move(4,4), new Move(5,5), new Move(6,6), new Move(7,7)]
];

const R = [
    [new Move(-1,0), new Move(-2,0), new Move(-3,0), new Move(-4,0), new Move(-5,0), new Move(-6,0), new Move(-7,0)],
    [new Move(0,-1), new Move(0,-2), new Move(0,-3), new Move(0,-4), new Move(0,-5), new Move(0,-6), new Move(0,-7)],
    [new Move(0,1), new Move(0,2), new Move(0,3), new Move(0,4), new Move(0,5), new Move(0,6), new Move(0,7)],
    [new Move(1,0), new Move(2,0), new Move(3,0), new Move(4,0), new Move(5,0), new Move(6,0), new Move(7,0)]
];

const B = [
    [new Move(-1,-1), new Move(-2,-2), new Move(-3,-3), new Move(-4,-4), new Move(-5,-5), new Move(-6,-6), new Move(-7,-7)],
    [new Move(-1,1), new Move(-2,2), new Move(-3,3), new Move(-4,4), new Move(-5,5), new Move(-6,6), new Move(-7,7)],
    [new Move(1,-1), new Move(2,-2), new Move(3,-3), new Move(4,-4), new Move(5,-5), new Move(6,-6), new Move(7,-7)],
    [new Move(1,1), new Move(2,2), new Move(3,3), new Move(4,4), new Move(5,5), new Move(6,6), new Move(7,7)]
];

const N = [
    [new Move(-2,-1)],
    [new Move(-2,1)],
    [new Move(-1,-2)],
    [new Move(-1,2)],
    [new Move(1,-2)],
    [new Move(1,2)],
    [new Move(2,-1)],
    [new Move(2,1)]
];

let moves: any = [];

moves["p"] = p;
moves["k"] = K;
moves["q"] = Q;
moves["r"] = R;
moves["b"] = B;
moves["n"] = N;

moves["P"] = P;
moves["K"] = K;
moves["Q"] = Q;
moves["R"] = R;
moves["B"] = B;
moves["N"] = N;


export default moves;