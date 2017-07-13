import React from 'react'
import { render } from 'react-dom'
// import createStore from './createStore'
import { createStore } from 'redux'
import expect from 'expect'
import './todo'

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