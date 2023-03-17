import React from 'react';
import styles from './ChessBoard.module.css';
import mateInTwo from "./mateInTwo";
import moves from "./moves";
import {Move} from "./Move";
import Row from "./Row";

interface ChessBoardProps {}


class ChessBoard extends React.Component {

    board:string[][] = [[], [], [], [], [], [], [], []];
    white:number[][] = [[], [], [], [], [], [], [], []];
    black:number[][] = [[], [], [], [], [], [], [], []];
    attack:string[][] = [[], [], [], [], [], [], [], []];

    initialize() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = ' ';
                this.white[i][j] = 0;
                this.black[i][j] = 0;
                this.attack[i][j] = '';
            }
        }

        let puzzles: string[] = mateInTwo.split("[Event").map(x => "[Event" + x );
        puzzles.shift(); // since we split on the first line, the first puzzle is empty. Shift() removes it

        let puzzleId: number = Math.floor(Math.random() * puzzles.length);
        let puzzle = puzzles[puzzleId];

        let lines = puzzle.split("\n");
        let line = lines.find(x => x.startsWith("[FEN "));
        let fen = line?.split("\"")[1]; // https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
        // e.g starting position for chess: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

        let positions = fen?.split((" "))[0];

        if (positions){
            let ranks:string[] = positions.split('/');
            ranks.forEach((rank, i) => {
                let j = 0;
                rank.split('').forEach((el) => {
                    if(!isNaN(Number(el))){
                        j += Number(el);
                    } else {
                        this.board[i][j] = el;
                        j++;
                    }
                });
            });

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let piece = this.board[i][j];
                    if (piece === piece.toUpperCase()) {
                        this.tracePiece(i, j, piece, this.board, this.white, this.attack);
                    } else {
                        this.tracePiece(i, j, piece, this.board, this.black, this.attack);
                    }
                }
            }
        }
    }

    private tracePiece(i: number, j: number, piece: string, board: string[][], shading: number[][], attack: string[][]) {
        function isValid(x: number, y: number) {
            if (0 <= x && x <= 7 &&
                0 <= y && y <= 7)
            {
                return true;
            }
            return false;
        }

        function isBlocked(i: number, j: number) {
            if (board[i][j] !== ' ') {
                return true;
            }
            return false;
        }

        if (piece === ' ') {
            return;
        }
        let rays = moves[piece];

        rays.forEach((ray: Move[]) => {
            let blocked = false;
            ray.forEach((move) => {
                let x = i + move.x;
                let y = j + move.y;

                if (isValid(x,y) && !blocked) {
                    shading[x][y] += 1;
                    attack[i][j] += ' ' + x + y;

                    blocked = blocked || isBlocked(x,y);
                }
            });
        });
        this.forceUpdate();
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        return (
            <div className={styles.ChessBoard}>
                <a onClick={this.initialize.bind(this)}>New puzzle</a>
                <div className="board">
                    <Row x={0} row={this.board[0]} white={this.white[0]} black={this.black[0]} attack={this.attack[0]}></Row>
                    <Row x={1} row={this.board[1]} white={this.white[1]} black={this.black[1]} attack={this.attack[1]}></Row>
                    <Row x={2} row={this.board[2]} white={this.white[2]} black={this.black[2]} attack={this.attack[2]}></Row>
                    <Row x={3} row={this.board[3]} white={this.white[3]} black={this.black[3]} attack={this.attack[3]}></Row>
                    <Row x={4} row={this.board[4]} white={this.white[4]} black={this.black[4]} attack={this.attack[4]}></Row>
                    <Row x={5} row={this.board[5]} white={this.white[5]} black={this.black[5]} attack={this.attack[5]}></Row>
                    <Row x={6} row={this.board[6]} white={this.white[6]} black={this.black[6]} attack={this.attack[6]}></Row>
                    <Row x={7} row={this.board[7]} white={this.white[7]} black={this.black[7]} attack={this.attack[7]}></Row>
                </div>
            </div>
        )
    }
}

export default ChessBoard;
