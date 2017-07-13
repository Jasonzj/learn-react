import React, { Component } from 'react'
// import store from './reducer'

class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            id: 0
        }
    }

    componentDidMount() {
        this.resetInput()
    }

    addTodo() {
        let id = this.state.id
        id++
        this.props.store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id
        })
        this.setState({
            id
        })
        this.resetInput()
    }

    resetInput() {
        this.input.value = ''
        this.input.focus()
    }

    render() {
        const { todos } = this.props

        return (
            <div>
                 <input type="text" ref={ (node) => this.input = node } /> 
                {/* <input type="text" ref="input" /> */}
                <button onClick={ () => this.addTodo() }>
                    Add Todo
                </button>
                <ul>
                    {
                        todos.map(todo => (
                            <li key={todo.id}>
                                { todo.text }
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoApp