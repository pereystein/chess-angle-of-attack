import React from 'react';
import styles from './ChessBoard.module.css';
import mateInTwo from "./mateInTwo";
import moves from "./moves";
import {Move} from "./Move";

interface ChessBoardProps {}


class ChessBoard extends React.Component {

    board:string[][] = [[], [], [], [], [], [], [], []];
    white:number[][] = [[], [], [], [], [], [], [], []];
    black:number[][] = [[], [], [], [], [], [], [], []];

    initialize() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = ' ';
                this.white[i][j] = 0;
                this.black[i][j] = 0;
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
                        this.tracePiece(i, j, piece, this.board, this.black);
                    } else {
                        this.tracePiece(i, j, piece, this.board, this.white);
                    }
                }
            }
        }
    }

    private tracePiece(i: number, j: number, piece: string, board: string[][], shading: number[][]) {
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

        console.log(moves, piece)
        rays.forEach((ray: Move[]) => {
            let blocked = false;
            ray.forEach((move) => {
                let x = i + move.x;
                let y = j + move.y;
                if (isValid(x,y) && !blocked) {
                    shading[x][y] = shading[x][y] + 1;
                    blocked = blocked || isBlocked(x,y);
                }
            });
        });
    }

    render() {
        this.initialize();
        return (
            <div className={styles.ChessBoard}>
                ChessBoard Component
            </div>
        )
    }
}

export default ChessBoard;
