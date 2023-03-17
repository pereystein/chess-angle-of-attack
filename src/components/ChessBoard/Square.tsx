import React from "react";
import SelectedContext from "../../selectedContext";
import pieces from "./pieces";


interface Props {
    x: number,
    y: number,
    piece: string,
    white: number,
    black: number,
    attack: string
}

class Square extends React.Component<Props, {}> {
    private selected: string = "";
    private setSelected: ((s: string) => void) | undefined;
    private id: string = "";
    constructor(props: Props){
        super(props);

        this.showAttackingSquares = this.showAttackingSquares.bind(this);
    }

    private pieceColor() {
        if (!this.props.piece || this.props.piece === ' ') {
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

        this.id = '' + this.props.x + this.props.y;
        return (
            <SelectedContext.Consumer>
                {
                    (context) => {
                        this.selected = context.selected;
                        this.setSelected = context.setSelected;

                        let squareStyle = "square " + parity;
                        if (this.selected === this.id){
                            squareStyle += " selected";
                        }

                        console.log(this.id + ": " + this.selected + " - " + this.props.attack);
                        if (this.props.attack?.includes(this.selected)) {
                            console.log("***");
                            squareStyle += " " + color + "_attacking";
                        }

                        return <div className={squareStyle} onClick={this.showAttackingSquares}>
                            <div className={'piece ' + color}>
                                {piece}
                            </div>
                            <div className={'shading ' + whiteShading + ' ' + blackShading}></div>
                        </div>

                    }
                }
            </SelectedContext.Consumer>
        )
    }

    private showAttackingSquares() {
        if (this.setSelected) {
            this.setSelected(this.id);
        }
    }
}

export default Square;