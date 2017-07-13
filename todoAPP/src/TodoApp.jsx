import React, { Component } from 'react'
import FilterLink from './FilterLink'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

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
        const filterArgs = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED']

        return (
            <div>
                <AddTodo 
                    onClick={ this.addTodo.bind(this) }
                    todoApp={ this }
                />
                <TodoList 
                    todos={ visibleTodos }
                    onTodoClick={ this.toggleTodo.bind(this) }
                />
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