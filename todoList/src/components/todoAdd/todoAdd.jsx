import React, { Component } from 'react'
import './todoAdd.scss'

class TodoAdd extends Component {
    render() {
        const { keyout, taskLen, visibility } = this.props

        return (
            <div className="todo-add">
                <h3>addTask:</h3>
                <input type="text" placeholder="please enter your plan" onKeyUp={ keyout } />
                <ul className="todo-ul">
                    <li>{ taskLen }个任务未完成</li>
                    <li>
                        <a href="#all" className={ visibility == 'all' && 'active' || visibility == '' && 'active'}>所有任务</a>
                        <a href="#unfinished" className={ visibility == 'unfinished' && 'active' }>未完成任务</a>
                        <a href="#finished" className={ visibility == 'finished' && 'active' }>完成的任务</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TodoAdd