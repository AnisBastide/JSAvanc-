import React from 'react';

import {withRouter} from "react-router";

import {connect} from "react-redux";

import {addBoard, addTab, addDisplay,changeColor} from "../redux/actions";

class Home extends React.Component {
    inputValue = "";
    tabHaut = [];
    tabGauche = [];
    o = -1;

    addBoard(event) {
        event.preventDefault();
        let target = event.target;
        var input= target[0].value;
        this.setSize(input);
    }

    setSize(input) {
        if (input == "tour (5x5)") {
            this.inputValue = input;
            this.props.addBoard({
                line: 5,
                column: 5,
                board:this.generateGrid(5, 5)
            })
            this.tabHaut = [<div>2</div>, <div>4</div>, <div><div>3</div> <div>1</div></div>, <div>4</div>, <div>2</div>];
            this.tabGauche = [<div className="line"> <div>1</div> <div>1</div> <div>1</div></div>, <div>5</div>, <div>3</div>,<div className="line"> <div>1</div> <div>1</div> </div>, <div>3</div>];
        } else if (input == "tête de mort (5x5)") {
            this.props.addBoard({
                line: 5,
                column: 5,
                board:this.generateGrid(5, 5)
            })
            this.tabHaut = [<div>3</div>, <div><div>2</div> <div>2</div></div>, <div>4</div>,  <div><div>2</div> <div>2</div></div>, <div>3</div>];
            this.tabGauche = [<div>3</div>, <div>5</div>,<div className="line"> <div>1</div> <div>1</div> <div>1</div></div>,<div>5</div>, <div className="line"> <div>1</div> <div>1</div> </div>];
        } else if (input == "musique (10x10)") {
            this.props.addBoard({
                line: 10,
                column: 10,
                board:this.generateGrid(10, 10)
            })
            this.tabHaut = [<div>2</div>, <div>4</div>, <div>4</div>, <div>8</div>, <div className="column"> <div>1</div><div>1</div></div>, <div className="column"> <div>1</div><div>1</div> </div>,<div className="column"> <div>1</div><div>1</div><div>2</div> </div>,<div className="column"> <div>1</div><div>1</div><div>4</div> </div>,<div className="column"> <div>1</div><div>1</div><div>4</div> </div>, <div>8</div>];
            this.tabGauche = [<div>4</div>,<div className="line"> <div>3</div><div>1</div> </div>, <div className="line"> <div>1</div><div>3</div> </div>, <div className="line"> <div>4</div><div>1</div> </div>, <div className="line"> <div>1</div><div>1</div> </div>, <div className="line"> <div>1</div><div>3</div> </div>, <div className="line"> <div>3</div><div>4</div> </div>, <div className="line"> <div>4</div><div>4</div> </div>, <div className="line"> <div>4</div><div>2</div> </div>, <div>2</div>];
        } else if (input == "réveil (10x10)") {
            this.props.addBoard({
                line: 10,
                column: 10,
                board:this.generateGrid(10, 10)
            })
            this.tabHaut = [<div>2</div>, <div className="column"> <div>2</div><div>4</div></div>, <div className="column"> <div>1</div><div>6</div><div>1</div></div>, <div className="column"> <div>5</div><div>3</div></div>, <div className="column"> <div>4</div><div>3</div> </div>,<div className="column"> <div>1</div><div>4</div> </div>,<div>9</div>, <div className="column"> <div>1</div><div>6</div><div>1</div> </div>, <div className="column"> <div>2</div><div>4</div></div>, <div>2</div>];
            this.tabGauche = [<div className="line"> <div>2</div><div>2</div> </div>,<div className="line"> <div>2</div><div>4</div><div>2</div> </div>, <div className="line"> <div>1</div><div>3</div><div>2</div><div>1</div> </div>, <div className="line"> <div>4</div><div>3</div> </div>, <div className="line"> <div>4</div><div>3</div> </div>, <div className="line"> <div>3</div><div>4</div> </div>, <div className="line"> <div>2</div><div>5</div> </div>, <div>6</div>, <div>4</div>, <div className="line"> <div>2</div><div>2</div> </div>];
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
                                                {this.increment(this.o)}
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
                <button>Vérifier</button>
            </div>;
        this.o = -1;
        return (display);
    }



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
        console.log(tab);
        return tab;
    }

    increment(o){
        this.o = this.o+1;
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

    generateIndices(input){
        if (this.inputValue == "tour (5x5)"){
            console.log("testouille");
            var tabIndices = [<div>2</div>, <div>4</div>, <div>3 1</div>, <div>4</div>, <div>2</div>]

            return tabIndices;
            }
        return <div>{this.tabHaut[0]}</div>
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




