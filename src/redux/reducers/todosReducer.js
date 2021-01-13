import {TODOS_DATA, TODOS_DETAIL} from '../actions/todosAction'

const initialState = {
    todos_data: [],
    todos_detail: []
}

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case TODOS_DATA:
            return {
                ...state,
                todos_data: action.payload
            }
        case TODOS_DETAIL:
            return {
                ...state,
                todos_detail: action.payload
            }
        default:
            return state
    }
}

export default todosReducer;