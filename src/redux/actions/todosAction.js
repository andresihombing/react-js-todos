export const TODOS_DATA = 'TODOS_DATA'
export const TODOS_DETAIL = 'TODOS_DETAIL'

export function changeTodos(value){
    return{
        type: TODOS_DATA,
        payload: value
    }
}

export function changeDetailTodos(value){
    return{
        type: TODOS_DETAIL,
        payload: value
    }
}
