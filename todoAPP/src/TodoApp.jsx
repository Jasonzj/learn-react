import React, { Component } from 'react'
import FilterLink from './FilterLink'

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

    toggleTodo(id) {
        this.props.store.dispatch({
            type: 'TOGGLE_TODO',
            id
        })
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

    resetInput() {
        this.input.value = ''
        this.input.focus()
    }

    render() {
        const { todos, visibilityFilter } = this.props
        const visibleTodos = this.getVisibleTodos(todos, visibilityFilter)

        return (
            <div>
                <input type="text" ref={ (node) => this.input = node } /> 
                <button onClick={ () => this.addTodo() }>
                    Add Todo
                </button>
                <ul>
                    {
                        visibleTodos.map(todo => (
                            <li 
                                key={ todo.id }
                                onClick={ () => this.toggleTodo(todo.id) }
                                style = {{ 
                                    textDecoration: 
                                        todo.completed 
                                            ? 'line-through' 
                                            : 'none' 
                                }}
                            >
                                { todo.text }
                            </li>
                        ))
                    }
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink 
                        filter='SHOW_ALL'
                        store={ this.props.store }
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink 
                        filter='SHOW_ACTIVE'
                        store={ this.props.store }
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink 
                        filter='SHOW_COMPLETED'
                        store={ this.props.store }
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}

export default TodoApp