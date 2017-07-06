import React, { Component } from 'react';
import './todoItem.scss'

class TodoItem extends Component {
    render() {
        const { data, change, clickDelete } = this.props

        return (
            <div className="todo-task">
                <ul className="todo-list">
                    {
                        data.map((item, index) => (
                            <li key={ index }>
                                <div className='todo-view'>
                                    <input 
                                        type="checkbox" 
                                        checked={ item.isChecked && 'checked' } 
                                        onChange={ (e) => change(index, e) } 
                                    />
                                    <span className={ item.isChecked && 'finish'}>{ item.title }</span>
                                    <a className="destroy" onClick={ () => clickDelete(index) }>X</a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoItem