import {
	EDIT_PROFIL,
	ADD_TODOLIST,
	CHECK_TODOLIST,
	DEL_TODOLIST
} from './actions'
import React from "react";


export const initialState = {
/**
* Profil datas [{Object}]
*
* @param      {String}  {pseudo}
*/
	about: [
	{
		prenom: 'Anis',
		nom: 'Bastide'
	},
	{
		prenom: 'Julien',
		nom: 'Visieux'
	},
	{
		prenom: 'Emmanuel',
		nom: 'Yao'
	},
	{
		prenom: 'Etienne',
		nom: 'Buronfosse'
	}
	],
	profil: {
		pseudo: ''
	},
/**
* TodoList datas [{Object}]
*
* @param      {String}  {title}
* @param      {String}  {desc}
* @param      {Boolean}  {check}
*/
	todoList: [
		{
			title: 'React JS',
			desc: 'Initialiser un projet avec npx',
			check: 1
		},
		{
			title: 'About',
			desc: 'Connecter le composant About à Redux'
		}
	]
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
	switch (action.type) {

		case EDIT_PROFIL:
			return { ...state, profil: action.profil };

		case ADD_TODOLIST:
			return { ...state, todoList: [ ...state.todoList, action.todo ] };

		case CHECK_TODOLIST:
			if (arrayHasIndex(state.todoList, action.index)) {
				return {...state, todoList: state.todoList.map((todo, index) => {
					if ( index === action.index ) {
						return { ...todo, check: 1 };
					}
					return todo;
				})};
			}
			return state;

		case DEL_TODOLIST:
			if (arrayHasIndex(state.todoList, action.index)) {
				return { ...state, todoList: [ ...state.todoList.filter((todo, index) => index !== action.index) ] };
			}
			return state;

		default:
			return state;
	}
}

export function generateGrid(nbrLine, nbrColumn){
	//var nbrColumn = document.getElementById("column").value;
	//var nbrLine = document.getElementById("line").value;
	console.log(nbrLine, nbrColumn);

}