import React from "react";
import Square from "./Square";

interface Props {
    x: number,
    row: string[],
    white: number[],
    black: number[],
    attack: string[]
}

class Row extends React.Component<Props, {}> {
    render() {
        return (
            <div className="row">
                <div className="grid">
                    <Square x={this.props.x} y={0} piece={this.props.row[0]} white={this.props.white[0]} black={this.props.black[0]} attack={this.props.attack[0]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={1} piece={this.props.row[1]} white={this.props.white[1]} black={this.props.black[1]} attack={this.props.attack[1]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={2} piece={this.props.row[2]} white={this.props.white[2]} black={this.props.black[2]} attack={this.props.attack[2]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={3} piece={this.props.row[3]} white={this.props.white[3]} black={this.props.black[3]} attack={this.props.attack[3]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={4} piece={this.props.row[4]} white={this.props.white[4]} black={this.props.black[4]} attack={this.props.attack[4]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={5} piece={this.props.row[5]} white={this.props.white[5]} black={this.props.black[5]} attack={this.props.attack[5]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={6} piece={this.props.row[6]} white={this.props.white[6]} black={this.props.black[6]} attack={this.props.attack[6]}></Square>
                </div>
                <div className="grid">
                    <Square x={this.props.x} y={7} piece={this.props.row[7]} white={this.props.white[7]} black={this.props.black[7]} attack={this.props.attack[7]}></Square>
                </div>
            </div>
        )
    }
}

export default Row;