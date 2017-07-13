import React, { Component } from 'react'
import FilterLink from './FilterLink'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

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

    addTodo = () => {
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

    toggleTodo = (id) => {
        this.props.store.dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }

    setVisibilityFilter = (e, filter) => {
        e.preventDefault()
        this.props.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
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
                <AddTodo 
                    todoApp={ this }
                    onClick={ this.addTodo } 
                />
                <TodoList 
                    todos={ visibleTodos }
                    onTodoClick={ this.toggleTodo }
                />
                <Footer 
                    visibilityFilter={ visibilityFilter }
                    onFilterClick={ this.setVisibilityFilter }
                />
            </div>
        )
    }
}

export default TodoApp