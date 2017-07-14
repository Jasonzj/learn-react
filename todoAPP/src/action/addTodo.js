let id = 0
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: id++,
        text
    }
}

export default addTodo