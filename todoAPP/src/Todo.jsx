import React, { PureComponent } from 'react'

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li 
        onClick={ onClick }
        style = {{ 
            textDecoration: 
                completed 
                    ? 'line-through' 
                    : 'none' 
        }}
    >
        {text}
    </li>
)

// class Todo extends PureComponent {
//     render() {
//         const { onClick, completed, text } = this.props

//         return (
//             <li 
//                 onClick={ onClick }
//                 style = {{ 
//                     textDecoration: 
//                         completed 
//                             ? 'line-through' 
//                             : 'none' 
//                 }}
//             >
//                 {text}
//             </li>
//         )
//     }
// }

export default Todo