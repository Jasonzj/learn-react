import React from 'react'
import { connect } from 'react-redux'
import addTodo from './action/addTodo'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <input type="text" ref={(node) => input = node} /> 
            <button onClick={() => {
                dispatch(addTodo(input.value))
                input.value = ''
                input.focus()
            }}>
                Add Todo
            </button>
        </div> 
    )
}

AddTodo = connect()(AddTodo)

// class AddTodo extends Component {
//     componentDidMount() {
//         this.resetInput()
//     }

//     addTodoAction = () => {
//         const { store } = this.context
//         store.dispatch({
//             type: 'ADD_TODO',
//             text: this.input.value,
//             id: id++
//         })
//         this.resetInput()
//     }

//     resetInput() {
//         this.input.value = ''
//         this.input.focus()
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={ (node) => this.input = node } /> 
//                 <button onClick={ this.addTodoAction }>
//                     Add Todo
//                 </button>
//             </div> 
//         )
//     }
// }

export default AddTodo