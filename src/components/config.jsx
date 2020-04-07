import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { editProfil } from "../redux/actions";

class Config extends React.Component {editProfil(event) {
		event.preventDefault();
		let target = event.target;

		this.props.editProfil({
			pseudo: target[0].value
		});
	}

	render() {
		const { profil } = this.props;
		return (
			<form onSubmit={ event => this.editProfil(event) }>
				<label>
					Pseudo : <input type="text" defaultValue={profil.pseudo} />
				</label>
				<button>Sauvegarder</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		profil: state.profil
	};
}

const mapDispatchToProps = dispatch => {
	return {
		editProfil: profil => {
			dispatch(editProfil(profil))
		}
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Config));

