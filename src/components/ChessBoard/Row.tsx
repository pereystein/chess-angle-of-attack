import React from "react";
import Square from "./Square";

interface Props {
    x: number,
    row: string[],
    white: number[],
    black: number[]
}

class Row extends React.Component<Props, {}> {
    render() {
        return (
            <div className="row">
                <Square x={this.props.x} y={0} piece={this.props.row[0]} white={this.props.white[0]} black={this.props.black[0]}></Square>
                <Square x={this.props.x} y={1} piece={this.props.row[1]} white={this.props.white[1]} black={this.props.black[1]}></Square>
                <Square x={this.props.x} y={2} piece={this.props.row[2]} white={this.props.white[2]} black={this.props.black[2]}></Square>
                <Square x={this.props.x} y={3} piece={this.props.row[3]} white={this.props.white[3]} black={this.props.black[3]}></Square>
                <Square x={this.props.x} y={4} piece={this.props.row[4]} white={this.props.white[4]} black={this.props.black[4]}></Square>
                <Square x={this.props.x} y={5} piece={this.props.row[5]} white={this.props.white[5]} black={this.props.black[5]}></Square>
                <Square x={this.props.x} y={6} piece={this.props.row[6]} white={this.props.white[6]} black={this.props.black[6]}></Square>
                <Square x={this.props.x} y={7} piece={this.props.row[7]} white={this.props.white[7]} black={this.props.black[7]}></Square>
            </div>
        )
    }
}

export default Row;