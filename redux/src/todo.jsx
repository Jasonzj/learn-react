import createStore from './createStore.js'
// import { createStore, combineReducers } from 'redux'

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
            
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            }
        
        default: 
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]      
        
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))
    
        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default: 
            return state
    }
}

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                )
                return nextState
            },
            {}
        )
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos, 
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter, 
//             action
//         )
//     }
// }

const store = createStore(todoApp)

console.log(store.getState())

store.dispatch({
    type: 'ADD_TODO',
    text: 'Jason',
    id: 0
})

console.log(store.getState())

store.dispatch({
    type: 'ADD_TODO',
    text: 'Jason',
    id: 1
})

console.log(store.getState())

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
})

console.log(store.getState())

store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
})

console.log(store.getState())