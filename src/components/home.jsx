import React from 'react';
import { generateGrid} from "../redux/reducer";

import { withRouter } from "react-router";

import { connect } from "react-redux";

import {addBoard} from "../../../../../Documents/ReactJS/example/src/redux/actions";

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
				<p>{board.title}</p>
			</div>
/*<div>

	<table>
		<tr className={"indice"}>
			<td className={"hautGauche"}></td>
			<td className={"indiceHaut"}>2</td>
			<td className={"indiceHaut"}>8</td>
			<td className={"indiceHaut"}></td>
			<td className={"indiceHaut"}></td>
			<td className={"indiceHaut"}></td>
		</tr>
		<tr class={"test"}>
			<td className={"indiceGauche"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
		</tr>
		<tr class={"test"}>
			<td className={"indiceGauche"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
		</tr>
		<tr class={"test"}>
			<td className={"indiceGauche"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
		</tr>
		<tr class={"test"}>
			<td className={"indiceGauche"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
		</tr>
		<tr class={"test"}>
			<td className={"indiceGauche"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
			<td class={"test"}></td>
		</tr>
	</table>
</div>*/
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
