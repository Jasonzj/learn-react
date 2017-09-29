import React, { PureComponent } from 'react'
import Todo from './Todo'

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {
            todos.map(todo => (
                <Todo 
                    key={todo.id}
                    onClick={() => onTodoClick(todo.id)}
                    {...todo}
                />
            ))
        }
    </ul>
)

// class TodoList extends PureComponent {
//     render() {
//         const { todos, onTodoClick } = this.props
//         return (
//             <ul>
//                 {
//                     todos.map(todo => (
//                         <Todo 
//                             key={todo.id}
//                             onClick={() => onTodoClick(todo.id)}
//                             {...todo}
//                         />
//                     ))
//                 }
//             </ul>
//         )
//     }
// }

export default TodoList