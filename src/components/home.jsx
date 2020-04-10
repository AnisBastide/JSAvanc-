import React from 'react';

import {withRouter} from "react-router";

import {connect} from "react-redux";

import {addBoard, addTab, addDisplay,changeColor} from "../redux/actions";

class Home extends React.Component {
    addBoard(event) {
        event.preventDefault();
        let target = event.target;
            var input= target[0].value;
        this.setSize(input);
    }

    setSize(input) {
        if (input == "tour (5x5)") {
            this.props.addBoard({
                line: 5,
                column: 5,
                board:this.generateGrid(5, 5)
            })
        } else if (input == "tête de mort (5x5)") {
            this.props.addBoard({
                line: 5,
                column: 5,
                board:this.generateGrid(5, 5)
            })
        } else if (input == "musique (10x10)") {
            this.props.addBoard({
                line: 10,
                column: 10,
                board:this.generateGrid(10, 10)
            })
        } else if (input == "réveil (10x10)") {
            this.props.addBoard({
                line: 10,
                column: 10,
                board:this.generateGrid(10, 10)
            })
        }
    }


    generateGrid(line, column) {
        var tab = [];
        var tab2 = [];
        for (var i = 0; i < column; i++) {
            for (var j = 0; j < line; j++) {
                tab2.push(["0"]);

            }
            tab.push(tab2);
            tab2 = [];
        }
        console.log(tab);
        return tab;
    }

    changeColor(event) {
        // const {board} = this.props;
        var cell = this.props.board.board[event.target.dataset.x][event.target.dataset.y];
        console.log(cell);
        if (cell == 0) {
            this.props.changeColor({x:parseInt(event.target.dataset.x),
                y:parseInt(event.target.dataset.y)})

        } else if (cell == 1) {
            this.props.changeColor({x:parseInt(event.target.dataset.x),
                y:parseInt(event.target.dataset.y)})
        }
    }

    displayColor(y, x) {
        const {board} = this.props;
        var cell = board.board[y][x];
        if (cell == 1) {
            return "black"
        }
        if (cell == 0) {
            return "white"
        }
    }

    displayBoard() {
        const {board} = this.props;
        var tabIndices = ["1", "2", "3", "4", "5"];
        var display =
            <div>

                <div>
                    <div id="decal-right">
                        <table className=".indice">
                            <tbody>{this.generateIndiceHaut(board.line).map((tab, i) => (
                                <tr key={i}>
                                    {tab.map((tab, i) => (
                                        <td key={i} className="indice">
                                            <div className="column">
                                                <div>{tabIndices[0]}</div>
                                                <div>{tabIndices[3]}</div>
                                                <div>{tabIndices[2]}</div>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}</tbody>
                        </table>
                    </div>
                    <div id="align">
                        <table>
                            <tbody>{this.generateIndiceGauche(board.column).map((tab, i) => (
                                <tr key={i}>
                                    {tab.map((tab, i) => (
                                        <td key={i} className="indice">
                                            <div className="line">
                                                <div>1</div>
                                                <div>2</div>
                                                <div>3</div>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}</tbody>
                        </table>
                        <table>
                            <tbody>{board.board.map((table, y) => (
                                <tr key={y}>
                                    {table.map((table, x) => (
                                        <td className={this.displayColor(y, x)}
                                            onClick={event => this.changeColor(event)}
                                            key={x}
                                            data-x={x} data-y={y}></td>
                                    ))}
                                </tr>
                            ))}</tbody>
                        </table>
                    </div>
                </div>
            </div>;

        return (display);
    }



    generateIndiceHaut(column) {
        var tab = [];
        var tab2 = [];
        for (var i = 0; i < 1; i++) {
            for (var j = 0; j < column; j++) {
                tab2.push([]);
            }
            tab.push(tab2);
            tab2 = [];
        }
        console.log(tab);
        return tab;
    }

    generateIndiceGauche(line) {
        var tab = [];
        var tab2 = [];
        for (var i = 0; i < line; i++) {
            for (var j = 0; j < 1; j++) {
                tab2.push([]);

            }
            tab.push(tab2);
            tab2 = [];
        }
        console.log(tab);
        return tab;
    }


    render() {
        //const { profil } = this.props;
        /*return (
        <p>
        Hello {profil.pseudo} !
        </p>
        );*/
        //console.log(board.title);
        return (
            <div>
                <form onSubmit={event => this.addBoard(event)}>
                    <select defaultValue="test" size="1">
                        <option defaultValue="1">tête de mort (5x5)</option>
                        <option defaultValue="2">tour (5x5)</option>
                        <option defaultValue="3">musique (10x10)</option>
                        <option defaultValue="4">réveil (10x10)</option>
                    </select>
                    <button type="submit">validate</button>
                </form>
                <div>
                    {this.displayBoard()}

                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        board: state.board,
        tab: state.tab,
        display: state.display
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addBoard: board => {
            dispatch(addBoard(board))
        },
        addTab: tab => {
            dispatch(addTab(tab))
        },
        addDisplay: display => {
            dispatch(addDisplay(display))
        },
        changeColor:data=>{
            dispatch(changeColor(data))
        }

    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));




