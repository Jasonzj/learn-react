import React, { Component } from 'react'
import Link from './Link'
import store from './reducer'

class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { filter, children, onClick } = this.props
        const state = store.getState()
        
        return (
            <Link 
                active={ filter === state.visibilityFilter }
                onClick={ e => onClick(e, filter) }
            >
                { children }
            </Link>
        )
    }
}

export default FilterLink