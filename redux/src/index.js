import React from 'react'
import { render } from 'react-dom'
// import createStore from './createStore'
import { createStore } from 'redux'
import expect from 'expect'

// Counter
const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

// reducer 
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(
    counter, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const CounterRender = () => {
    render(
        <Counter 
            value={store.getState()} 
            onIncrement={() => {
                store.dispatch({ type: 'INCREMENT' })
            }}
            onDecrement={() => {
                store.dispatch({ type: 'DECREMENT' })
            }}
        />,
        document.getElementById('root')
    )
}

store.subscribe(CounterRender)   
CounterRender()

// expect(
//     counter(0, { type: 'INCREMENT' })
// ).toEqual(1)

// expect(
//     counter(1, { type: 'INCREMENT' })
// ).toEqual(2)

// expect(
//     counter(2, { type: 'DECREMENT' })
// ).toEqual(1)

// expect(
//     counter(1, { type: 'DECREMENT' })
// ).toEqual(0)

// expect(
//     counter(1, { type: 'Jason' })
// ).toEqual(1)

// expect(
//     counter(undefined, {})
// ).toEqual(0)

// console.log('Tests passed!!!!!!')

const removeCounter = (list, index) => {
    // return list
    //     .slice(0, index)
    //     .concat(list.slice(index + 1))
    
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}

const incrementCounter = (list, index) => {
    // return list
    //     .slice(0, index)
    //     .concat([list[index] + 1])
    //     .concat(list.slice(index + 1))

    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
}

const toggleTodo = (todo) => {
    // return {
    //     ...todo,
    //     completed: !todo.completed
    // }

    return Object.assign({}, todo, {
        completed: !todo.completed
    })
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }
                
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}

const arr = [1, 2, 3, 4]
const arr2 = removeCounter(arr, 2)
const arr3 = incrementCounter(arr, 2)
console.log(arr)
console.log(arr2)
console.log(arr3)

const todo = {
    id: 0,
    text: 'Learn Redux',
    completed: false
}
const todo2 = toggleTodo(todo)
console.log(todo)
console.log(todo2)

const stateBefore = []
const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
}
const result = todos(stateBefore, action)
console.log(result)

const stateBefore2 = [
    {
        id: 0,
        text: 'Learn Redux',
        completed: false
    },
    {
        id: 1,
        text: 'Go shopping',
        completed: false
    }
]

const action2 = {
    type: 'TOGGLE_TODO',
    id: 1
}

const result2 = todos(stateBefore2, action2)
console.log(result2)




