import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";

class Home extends React.Component {
	render() {
		const { profil } = this.props;
		/*return (
			<p>
				Hello {profil.pseudo} !
			</p>
		);*/
		return (
			<div>
				<form action="">
					<p>Entrez un nombre de colonne</p>
					<input type="number" name="column"/>
					<p>Entrez un nombre de ligne</p>
					<input type="number" name="line"/> <br/>
					<input type="submit" onClick=""/>
				</form>
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
		profil: state.profil
	};
}

export default withRouter(connect(
	mapStateToProps
)(Home));
