import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import toggleTodo from './action/toggleTodo'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

// class VisibleTodoList extends Component {
//     componentDidMount() {
//         this.unsubscribe = this.store.subscribe(() => 
//             this.forceUpdate()
//         )
//     }

//     componentWillUnmount() {
//         this.unsubscribe()
//     }
    
//     getVisibleTodos(todos, filter) {
//         switch (filter) {
//             case 'SHOW_ALL':
//                 return todos
//             case 'SHOW_COMPLETED':
//                 return todos.filter(t => t.completed)
//             case 'SHOW_ACTIVE':
//                 return todos.filter(t => !t.completed)
//         }
//     }

//     toggleTodoAction = (id) => {
//         this.store.dispatch({
//             type: 'TOGGLE_TODO',
//             id
//         })
//     }

//     render() {
//         const props = this.props
//         const { store } = this.context
//         const state = store.getState()
//         const todos = this.getVisibleTodos(state.todos, state.visibilityFilter)
//         this.store = store

//         return (
//             <TodoList 
//                 todos={ todos }
//                 onTodoClick={ this.toggleTodoAction }
//             />
//         )
//     }
// }
// VisibleTodoList.contextTypes = {
//     store: React.PropTypes.object
// }

export default VisibleTodoList