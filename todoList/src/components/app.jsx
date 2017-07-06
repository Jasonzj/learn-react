import React, { Component } from 'react'
import Header from './header/header.jsx'
import TodoAdd from './todoAdd/todoAdd.jsx'
import TodoItem from './todoItem/todoItem.jsx'
import store from '../js/store.js'

class App extends Component {
    constructor(props) {
        super(props)

        const list = store.fetch("todoList")
        this.state = {
            lists: list,
            visibility: 'all',
            editTodo: '',
            beforeTitle: ''
        }
    }

    componentDidMount() {
        this.watchHashChange()
        window.addEventListener("hashchange", this.watchHashChange.bind(this))
    }

    watchHashChange() {
        var hash = window.location.hash.slice(1);
        this.setState({
            visibility: hash
        })
    }

    addTodo(e) {
        if (e.keyCode === 13) {
            this.state.lists.push({
                title: e.target.value,
                isChecked: false
            })
            e.target.value = ''
            this.setState({
                lists: this.state.lists
            })
            store.save("todoList", this.state.lists)
        }
    }

    deleteTodo(index) {
        this.state.lists.splice(index, 1)
        this.setState({
            lists: this.state.lists
        })
        store.save("todoList", this.state.lists)
    }

    isChecked(index, e) {
        this.state.lists[index].isChecked = e.target.checked
        this.setState({
            lists: this.state.lists
        })
        store.save("todoList", this.state.lists)
    }

    checkedLen() {
        return this.state.lists.filter((item) => !item.isChecked).length
    }

    getList() {
        const { lists } = this.state
        switch (this.state.visibility) {
            case 'all':
                return lists
        
            case 'finished':
                return lists.filter((item) => item.isChecked)

            case 'unfinished':
                return lists.filter((item) => !item.isChecked)

            default:
                return lists
        }
    }
    
    render() {
        const lists = this.getList()
        const { visibility, editTodo } = this.state

        return (
            <div className="app-wrap">
                <Header />
                <div className="app-center">
                    <TodoAdd 
                        keyout={ this.addTodo.bind(this) } 
                        taskLen={ this.checkedLen.call(this) }
                        visibility={ visibility }
                    />
                    <TodoItem 
                        data={ lists } 
                        change={ this.isChecked.bind(this) } 
                        clickDelete={ this.deleteTodo.bind(this) } 
                    />
                </div>
            </div>
        )
    }
}

export default App