import {
    EDIT_PROFIL,
    ADD_TODOLIST,
    CHECK_TODOLIST,
    DEL_TODOLIST, ADD_BOARD, ADD_TAB, ADD_DISPLAY, CHANGE_COLOR
} from './actions'


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
    ],
    board: {
        line: 0,
        column: 0,
        board: []

    },
    tab: []
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case EDIT_PROFIL:
            return {...state, profil: action.profil};

        case ADD_TODOLIST:
            return {...state, todoList: [...state.todoList, action.todo]};

        case CHECK_TODOLIST:
            if (arrayHasIndex(state.todoList, action.index)) {
                return {
                    ...state, todoList: state.todoList.map((todo, index) => {
                        if (index === action.index) {
                            return {...todo, check: 1};
                        }
                        return todo;
                    })
                };
            }
            return state;

        case DEL_TODOLIST:
            if (arrayHasIndex(state.todoList, action.index)) {
                return {...state, todoList: [...state.todoList.filter((todo, index) => index !== action.index)]};
            }
            return state;
        case ADD_BOARD:
            return {...state, board: action.board};
        case ADD_TAB:
            return {...state, tab: action.tab};
        case ADD_DISPLAY:
            return {...state, display: action.display};
        case CHANGE_COLOR:
            return {
                ...state, board: { ...state.board,board:state.board.board.map((line, y) => {
					if (y === action.data.y) {
						return line.map((square, x) => {
							if (x === action.data.x) {
                                return square==0? 1:0;
							}
							return square;
						});
					}
					return line;
                })
            }};


        default:
            return state;
    }
}
