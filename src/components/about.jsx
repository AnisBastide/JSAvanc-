import React from 'react';

import {initialState} from "../redux/reducer";

import { withRouter } from "react-router";

class About extends React.Component {
	constructor() {
		super();

		this.authors = [
			{
				pseudo: 'Angamara'
			}
		];
	}

	render() {
		return (
			<div>
				{initialState.about.map((author , i) => (
					<div key={i}>
						By {author.prenom +" "+ author.nom}
					</div>
				))}
			</div>
		);
	}
}

export default withRouter(About);