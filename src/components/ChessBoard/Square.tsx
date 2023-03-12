import React from "react";
import pieces from "./pieces";


interface Props {
    x: number,
    y: number,
    piece: string,
    white: number,
    black: number
}


class Square extends React.Component<Props, {}> {

    private pieceColor() {
        if (this.props.piece === ' ') {
            return "";
        }

        if (this.props.piece === this.props.piece.toUpperCase()){
            return "white";
        }

        return "black";
    }
    render() {
        let piece = pieces[this.props.piece];
        let color = this.pieceColor();
        let whiteShading = "white" + this.props.white;
        let blackShading = "black" + this.props.black;
        let parity = "odd";
        if ((this.props.x + this.props.y) % 2 === 0) {
            parity = "even";
        }

        return (
            <div className={'square ' + parity}>
                <div className={'piece ' + color}>
                    {piece}
                </div>
                <div className={'shading ' + whiteShading + ' ' + blackShading}></div>
            </div>
        )
    }
}

export default Square;