import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";

import {addBoard} from "../redux/actions";

class Home extends React.Component {
	addBoard(event){
		event.preventDefault();
		let target=event.target;
		console.log(target[0].value,target[1].value);
		this.props.addBoard({
			column: target[0].value,
			line:target[1].value
		})
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
				<form onSubmit={ event => this.addBoard(event)}>
					<p>Entrez un nombre de colonne</p>
					<input id="column" type="text" name="column" defaultValue={5}/>
					<p>Entrez un nombre de ligne</p>
					<input id ="line" type="text" name="line" defaultValue={5}/> <br/>
					<input type="submit"/>
				</form>
				<p>{generateGrid(board.line,board.column)}</p>
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

function generateGrid(line,column){
	var tab=[];
	for(var i=0;i<=column;i++){
		tab.push([""]);
		for(var j=0;j<=line;j++){
			tab[i].push([""]);

		}
	}
	console.log(tab);
	return tab;
}
