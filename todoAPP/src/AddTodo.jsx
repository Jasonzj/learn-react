import React from 'react'

const AddTodo = ({
    onClick,
    todoApp
}) => (
    <div>
        <input type="text" ref={ (node) => todoApp.input = node } /> 
        <button onClick={ () => onClick() }>
            Add Todo
        </button>
    </div>
)

export default AddTodo