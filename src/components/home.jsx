import React from 'react';

import {withRouter} from "react-router";

import {connect} from "react-redux";

import {addBoard} from "../redux/actions";

class Home extends React.Component {
    addBoard(event) {
        event.preventDefault();
        let target = event.target;
        this.props.addBoard({
            column: target[0].value,
            line: target[1].value
        })
    }
    generateGrid(line, column) {
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
                    <p>Entrez un nombre de colonne</p>
                    <input id="column" type="text" name="column" defaultValue={5}/>
                    <p>Entrez un nombre de ligne</p>
                    <input id="line" type="text" name="line" defaultValue={5}/> <br/>
                    <input type="submit"/>
                </form>
                <div id="decal-right">
                    <table class=".indice">
                    <tbody>{this.generateIndiceHaut(board.line).map((tab, i) => (
                        <tr key={i}>
                            {tab.map((tab,i)=>(
                                <td key={i} className="indice"><div class="column"><div>{tabIndices[0]}</div> <div>{tabIndices[3]}</div> <div>{tabIndices[2]}</div></div></td>
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
                                    <td key={i} className="indice"><div class="line"><div>1</div><div>2</div><div>3</div></div></td>
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


