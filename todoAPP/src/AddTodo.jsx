import React, { Component } from 'react'

let id = 0

class AddTodo extends Component {
    componentDidMount() {
        this.resetInput()
    }

    addTodoAction = () => {
        const { store } = this.context
        store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: id++
        })
        this.resetInput()
    }

    resetInput() {
        this.input.value = ''
        this.input.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={ (node) => this.input = node } /> 
                <button onClick={ this.addTodoAction }>
                    Add Todo
                </button>
            </div> 
        )
    }
}
AddTodo.contextTypes = {
    store: React.PropTypes.object
}

export default AddTodo