import React from 'react'
import { render } from 'react-dom'
import TodoApp from './TodoApp'
import Provider from './Provider'
import store from './reducer'

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)


