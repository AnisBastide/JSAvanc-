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

    render() {
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
                <div>
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


