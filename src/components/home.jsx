import React from 'react';

import {withRouter} from "react-router";

import {connect} from "react-redux";

import {addBoard} from "../redux/actions";

class Home extends React.Component {
    addBoard(event) {
        const {board} = this.props;
        event.preventDefault();
        let target = event.target;
        this.props.addBoard({
            x: target[0].value,
        })
        this.setSize();
    }
    setSize(){
        const {board} = this.props;
        if (board.x == "tour (5x5)"){
            this.props.addBoard({
                line: 5,
                column: 5,
            })
        }
        else if(board.x == "tête de mort (5x5)"){
            this.props.addBoard({
                line: 5,
                column: 5,
            })
        }
        else if(board.x == "musique (10x10)"){
            this.props.addBoard({
                line: 10,
                column: 10,
            })
        }
        else if(board.x == "réveil (10x10)"){
            this.props.addBoard({
                line: 10,
                column: 10,
            })
        }
    }
    generateGrid(column, line) {
        var tab = [];
        var tab2 = [];
        for (var i = 0; i < column; i++) {
            for (var j = 0; j < line; j++) {
                tab2.push([]);

            }
            tab.push(tab2);
            tab2 = [];
        }
        console.log(tab);
        return tab;
    }

    generateIndiceHaut(column){
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
    generateIndiceGauche(line){
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
        var tabIndices = ["1", "2", "3", "4", "5"];
        const {board} = this.props;
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
                <div id="decal-right">
                    <table className=".indice">
                    <tbody>{this.generateIndiceHaut(board.line).map((tab, i) => (
                        <tr key={i}>
                            {tab.map((tab,i)=>(
                                <td key={i} className="indice"><div className="column"><div>{tabIndices[0]}</div> <div>{tabIndices[3]}</div> <div>{tabIndices[2]}</div></div></td>
                            ))}
                        </tr>
                    ))}</tbody>
                    </table>
                </div>
                <div id="align">
                    <table>
                        <tbody>{this.generateIndiceGauche(board.column).map((tab, i) => (
                            <tr key={i}>
                                {tab.map((tab,i)=>(
                                    <td key={i} className="indice"><div className="line"><div>1</div><div>2</div><div>3</div></div></td>
                                ))}
                            </tr>
                        ))}</tbody>
                    </table>
                <table>
                    <tbody>{this.generateGrid(board.line, board.column).map((tab, i) => (
                        <tr key={i}>
                            {tab.map((tab,i)=>(
                            <td key={i} className="test"></td>
                            ))}
                        </tr>


                    ))}</tbody>
                </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        board: state.board
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addBoard: board => {
            dispatch(addBoard(board))
        }

    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));


