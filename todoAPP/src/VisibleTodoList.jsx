import React, { Component } from 'react'
import TodoList from './TodoList'
import store from './reducer'

class VisibleTodoList extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    
    getVisibleTodos(todos, filter) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
        }
    }

    toggleTodo = (id) => {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }

    render() {
        const props = this.props
        const state = store.getState()
        const todos = this.getVisibleTodos(state.todos, state.visibilityFilter)

        return (
            <TodoList 
                todos={ todos }
                onTodoClick={ this.toggleTodo }
            />
        )
    }
}

export default VisibleTodoList