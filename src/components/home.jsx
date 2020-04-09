import React from 'react';

import {withRouter} from "react-router";

import {connect} from "react-redux";

import {addBoard, addTab,addDisplay} from "../redux/actions";

class Home extends React.Component {
    addBoard(event) {
        event.preventDefault();
        let target = event.target;
        this.props.addBoard({
            column: target[0].value,
            line: target[1].value
        })
        this.props.addTab(
            this.generateGrid(target[1].value, target[0].value)
        )
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
        const {tab} = this.props;
        var cell = tab[event.target.dataset.x][event.target.dataset.y];
        console.log(cell);
        if (cell == 0) {
            this.props.tab[event.target.dataset.x][event.target.dataset.y] = ["1"];
        } else if (cell == 1) {
            this.props.tab[event.target.dataset.x][event.target.dataset.y] = ["0"];
        }
    }
    displayColor(y,x){
        const {tab} =this.props;
        var cell = tab[x][y];
        if(cell==1){
            return "black"
        }
        if(cell==0){
            return "white"
        }
    }

    displayBoard(){
        const {tab}=this.props;
        var display=<div>
            <table>
                <tbody>{tab.map((table, y) => (
                    <tr key={y}>
                        {table.map((table, x) => (
                            <td className={this.displayColor(y,x)}
                                onClick={event => this.changeColor(event)}
                                key={x}
                                data-x={x} data-y={y}>   </td>
                        ))}
                    </tr>
                ))}</tbody>
            </table>
        </div>
        this.props.addDisplay(display);

        return (display);
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
                    <p>Entrez un nombre de colonne</p>
                    <input id="column" type="text" name="column" defaultValue={5}/>
                    <p>Entrez un nombre de ligne</p>
                    <input id="line" type="text" name="line" defaultValue={5}/> <br/>
                    <input type="submit"/>
                    {this.displayBoard()}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        board: state.board,
        tab: state.tab,
        display:state.display
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
        }

    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));




