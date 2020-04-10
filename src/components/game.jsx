import React from 'react';

import {withRouter} from "react-router";

import {connect} from "react-redux";

import {addBoard,changeColor} from "../redux/actions";

class Home extends React.Component {
    /*
    define all the variable that we need in the class
     */
    constructor() {
        super();
        this.deadFace = [["0", "1", "1", "1", "0"], ["1", "1", "1", "1", "1"], ["1", "0", "1", "0", "1"], ["1", "1", "1", "1", "1"], ["0", "1", "0", "1", "0"]];
        this.tower = [["1", "0", "1", "0", "1"], ["1", "1", "1", "1", "1"], ["0", "1", "1", "1", "0"], ["0", "1", "0", "1", "0"], ["0", "1", "1", "1", "0"]];
        this.music = [["0", "0", "0", "0", "0", "0", "1", "1", "1", "1"], ["0", "0", "0", "1", "1", "1", "0", "0", "0", "1"], ["0", "0", "0", "1", "0", "0", "0", "1", "1", "1"], ["0", "0", "0", "1", "1", "1", "1", "0", "0", "1"], ["0", "0", "0", "1", "0", "0", "0", "0", "0", "1"], ["0", "0", "0", "1", "0", "0", "0", "1", "1", "1"], ["0", "1", "1", "1", "0", "0", "1", "1", "1", "1"], ["1", "1", "1", "1", "0", "0", "1", "1", "1", "1"], ["1", "1", "1", "1", "0", "0", "0", "1", "1", "0"], ["0", "1", "1", "0", "0", "0", "0", "0", "0", "0"]];
        this.reveil=[["0","1","1","0","0","0","0","1","1","0"],["1","1","0","1","1","1","1","0","1","1"],["1","0","1","1","1","0","1","1","0", "1"],["0","1","1","1","1","0","1","1","1","0"], ["0","1","1","1","1","0","1","1","1","0"], ["0","1","1","1","0","1","1","1","1","0"], ["0","1","1","0","1","1","1","1","1","0"], ["0","0","1","1","1","1","1","1","0","0"], ["0","0","0","1","1","1","1","0","0","0"], ["0","0","1","1","0","0","1","1","0","0"]];
        this.check = false;
        this.finalBoard = [];
        this.state = {
            result: "Vous n'avez pas encore trouvé",
            button: false
        }
    }
    inputValue = "";
    tabHaut = [];
    tabGauche = [];
    o = -1;
    /*
    get the chosen board and add it to the page
     */
    addBoard(event) {
        event.preventDefault();
        let target = event.target;
        var input = target[0].value;
        this.setSize(input);
    }

    /*
    check if you correctly done the draw
     */
    checkResult() {
        const {board} = this.props;
        let boardToCompare = JSON.stringify(board.board);
        let boardFinal = JSON.stringify(this.finalBoard);
        if (boardToCompare == boardFinal) {
            this.setState({...this.state, result: "Bien joué"});
        } else {
            this.setState({...this.state, result: "Vous n'avez pas encore trouvé"});
        }
    }

    /*
    set the size of the board and call the function to create it, also create the left and top board with values
     */
    setSize(input) {
        if (input == "tour (5x5)") {
            this.inputValue = input;
            this.props.addBoard({
                line: 5,
                column: 5,
                board: this.generateGrid(5, 5)
            })
            this.finalBoard = this.tower;
            this.tabHaut = [<div>2</div>, <div>4</div>, <div><div>3</div> <div>1</div></div>, <div>4</div>, <div>2</div>];
            this.tabGauche = [<div className="line"> <div>1</div> <div>1</div> <div>1</div></div>, <div>5</div>, <div>3</div>,<div className="line"> <div>1</div> <div>1</div> </div>, <div>3</div>];
        } else if (input == "tête de mort (5x5)") {
            this.props.addBoard({
                line: 5,
                column: 5,
                board: this.generateGrid(5, 5)
            })
            this.finalBoard = this.deadFace;
            this.tabHaut = [<div>3</div>, <div><div>2</div> <div>2</div></div>, <div>4</div>,  <div><div>2</div> <div>2</div></div>, <div>3</div>];
            this.tabGauche = [<div>3</div>, <div>5</div>,<div className="line"> <div>1</div> <div>1</div> <div>1</div></div>,<div>5</div>, <div className="line"> <div>1</div> <div>1</div> </div>];
        } else if (input == "musique (10x10)") {
            this.props.addBoard({
                line: 10,
                column: 10,
                board: this.generateGrid(10, 10)
            })
            this.finalBoard = this.music;
            this.tabHaut = [<div>2</div>, <div>4</div>, <div>4</div>, <div>8</div>, <div className="column"> <div>1</div><div>1</div></div>, <div className="column"> <div>1</div><div>1</div> </div>,<div className="column"> <div>1</div><div>1</div><div>2</div> </div>,<div className="column"> <div>1</div><div>1</div><div>4</div> </div>,<div className="column"> <div>1</div><div>1</div><div>4</div> </div>, <div>8</div>];
            this.tabGauche = [<div>4</div>,<div className="line"> <div>3</div><div>1</div> </div>, <div className="line"> <div>1</div><div>3</div> </div>, <div className="line"> <div>4</div><div>1</div> </div>, <div className="line"> <div>1</div><div>1</div> </div>, <div className="line"> <div>1</div><div>3</div> </div>, <div className="line"> <div>3</div><div>4</div> </div>, <div className="line"> <div>4</div><div>4</div> </div>, <div className="line"> <div>4</div><div>2</div> </div>, <div>2</div>];
        } else if (input == "réveil (10x10)") {
            this.props.addBoard({
                line: 10,
                column: 10,
                board: this.generateGrid(10, 10)
            })
            this.finalBoard = this.reveil;
            this.tabHaut = [<div>2</div>, <div className="column"> <div>2</div><div>4</div></div>, <div className="column"> <div>1</div><div>6</div><div>1</div></div>, <div className="column"> <div>5</div><div>3</div></div>, <div className="column"> <div>4</div><div>3</div> </div>,<div className="column"> <div>1</div><div>4</div> </div>,<div>9</div>, <div className="column"> <div>1</div><div>6</div><div>1</div> </div>, <div className="column"> <div>2</div><div>4</div></div>, <div>2</div>];
            this.tabGauche = [<div className="line"> <div>2</div><div>2</div> </div>,<div className="line"> <div>2</div><div>4</div><div>2</div> </div>, <div className="line"> <div>1</div><div>3</div><div>2</div><div>1</div> </div>, <div className="line"> <div>4</div><div>3</div> </div>, <div className="line"> <div>4</div><div>3</div> </div>, <div className="line"> <div>3</div><div>4</div> </div>, <div className="line"> <div>2</div><div>5</div> </div>, <div>6</div>, <div>4</div>, <div className="line"> <div>2</div><div>2</div> </div>];
        }
    }


    /*
    generate the grid used to display the board
     */
    generateGrid(line, column) {
        var tab = [];
        var tab2 = [];
        for (var i = 0; i < column; i++) {
            for (var j = 0; j < line; j++) {
                tab2.push("0");

            }
            tab.push(tab2);
            tab2 = [];
        }
        this.setState({...this.state, button: true});
        return tab;
    }

    /*
    change the value of a cell in the board to change color
     */
    changeColor(event) {
        var cell = this.props.board.board[event.target.dataset.x][event.target.dataset.y];
        if (cell == 0) {
            this.props.changeColor({
                x: parseInt(event.target.dataset.x),
                y: parseInt(event.target.dataset.y)
            })

        } else if (cell == 1) {
            this.props.changeColor({
                x: parseInt(event.target.dataset.x),
                y: parseInt(event.target.dataset.y)
            })
        }
    }

    /*
    display the color after change
     */
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

    /*
    display the board with the grid and the left and top board
     */
    displayBoard() {
        const {board} = this.props;
        var display =
            <div>

                <div>
                    <div id="decal-right">
                        <table className=".indice">
                            <tbody>{this.generateIndiceHaut(board.line).map((tab, i) => (
                                <tr key={i}>
                                    {tab.map((tab, i) => (
                                        <td key={i} className="indice">
                                            <div className="column" className="indiceHaut">
                                                {this.tabHaut[i]}
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
                                            <div className="line" className="indiceGauche">
                                                {this.increment()}
                                                {this.tabGauche[this.o]}
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
                {this.state.button ? this.getResult() : <div></div>}
            </div>;
        this.o = -1;
        return (display);
    }

    /*
    display the "verify" button if you have chosen a draw
     */
    getResult() {
        return (<div className={"column"}>
                {this.state.result}
                <button onClick={() => this.checkResult()}>Verify</button>
                 </div>
        )

    }


    /*
    generate the top grid
     */
    generateIndiceHaut(column) {
        var tab = [];
        var tab2 = [];
        if (this.props.addBoard.line == 5) {
            console.log("test");
        }
        for (var i = 0; i < 1; i++) {
            for (var j = 0; j < column; j++) {
                tab2.push([]);
            }
            tab.push(tab2);
            tab2 = [];
        }
        return tab;
    }

    increment(){
        this.o = this.o+1;
    }

    /*
    generate the left grid
     */
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
        return tab;
    }
    render() {
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

/*
used to get a value from the server
 */
const mapStateToProps = state => {
    return {
        board: state.board,
        tab: state.tab,
        display: state.display
    };
}

/*
used to modify a value from the server
 */
const mapDispatchToProps = dispatch => {
    return {
        addBoard: board => {
            dispatch(addBoard(board))
        },
        changeColor: data => {
            dispatch(changeColor(data))
        }

    };
}

/*
connect to the server
 */
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));




