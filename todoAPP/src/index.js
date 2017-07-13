import React from 'react'
import { render } from 'react-dom'
import TodoApp from './TodoApp'
import store from './reducer'

const appRender = () => {
    render(
        <TodoApp />,
        document.getElementById('root')
    )
}

store.subscribe(appRender)
appRender()
