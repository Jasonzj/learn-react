import React, { Component } from 'react'
import store from './reducer'

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            id: 0
        }
    }

    componentDidMount() {
        this.resetInput()
    }

    addTodo = () => {
        let id = this.state.id
        id++
        store.dispatch({
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
        return (
            <div>
                <input type="text" ref={ (node) => this.input = node } /> 
                <button onClick={ this.addTodo }>
                    Add Todo
                </button>
            </div> 
        )
    }
}

export default AddTodo