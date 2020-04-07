/*
 * action types
 */

export const EDIT_PROFIL = 'EDIT_PROFIL';
export const ADD_TODOLIST = 'ADD_TODOLIST';
export const CHECK_TODOLIST = 'CHECK_TODOLIST';
export const DEL_TODOLIST = 'DEL_TODOLIST';
export const ADD_BOARD = 'ADD_BOARD';

/*
 * action creators
 */

/**
 * Edit profil from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Object}  {datas:{pseudo}}  Profil datas
 * @return     {Object}  Redux Store Object
 */

export function editProfil(profil) {
  return { type: EDIT_PROFIL, profil };
}

/**
 * Add Todo from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Object}  {datas:{title, desc}}  Todo datas
 * @return     {Object}  Redux Store Object
 */

export function addTodoList(todo) {
  return { type: ADD_TODOLIST, todo };
}

/**
 * Check Todo from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  Todo index
 * @return     {Object}  Redux Store Object
 */

export function checkTodoList(index) {
  return { type: CHECK_TODOLIST, index };
}

/**
 * Del Todo from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  Todo index
 * @return     {Object}  Redux Store Object
 */

export function delTodoList(index) {
  return { type: DEL_TODOLIST, index };
}

export function addBoard(board){
  return { type: ADD_BOARD, board};
}
/*export function addBoard(){
  return { type: }
}*/