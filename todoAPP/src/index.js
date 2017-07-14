import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import store from './reducers/reducer'

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)


