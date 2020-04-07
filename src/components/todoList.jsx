import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";
import { addTodoList, checkTodoList, delTodoList } from "../redux/actions";

class TodoList extends React.Component {
	addTodoList(event) {
		event.preventDefault();
		let target = event.target;

		this.props.addTodoList({
			title: target[0].value,
			desc: target[1].value
		});
	}


	checkTodoList(index) {
		this.props.checkTodoList(index);
	}

	delTodoList(index) {
		this.props.delTodoList(index);
	}

	render() {
		const { todoList } = this.props;
		return (
			<div>
				<form onSubmit={ event => this.addTodoList(event) }>
					<label>
						Titre : <input type="text" />
					</label>
					<label>
						Description : <input type="text" />
					</label>
					<button>Ajouter</button>
				</form><br /><br />
				{todoList.map((todo , i) => (
					<div key={i}>
						{todo.title} : {!todo.check ? 'En cours' : 'Terminé'}<br />
						{todo.desc}<br />
						{!todo.check && <button onClick={() => this.checkTodoList(i)}>Valider</button> }
						<button onClick={() => this.delTodoList(i)}>Supprimer</button><br /><br />
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addTodoList: todo => {
			dispatch(addTodoList(todo))
		},
		checkTodoList: index => {
			dispatch(checkTodoList(index))
		},
		delTodoList: index => {
			dispatch(delTodoList(index))
		}
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList));
