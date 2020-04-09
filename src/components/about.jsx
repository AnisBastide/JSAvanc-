import React from 'react';


import { withRouter } from "react-router";
import {connect} from "react-redux";

class About extends React.Component {

	render() {
		const {about}=this.props;
		return (
			<div>
				{about.map((author , i) => (
					<div key={i}>
						By {author.prenom +" "+ author.nom}
					</div>
				))}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		about: state.about
	};
}

export default withRouter(connect(
	mapStateToProps
)(About));
