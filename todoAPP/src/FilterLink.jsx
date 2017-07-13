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

    visibilityAction = (filter) => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
        })
    }

    render() {
        const { filter, children } = this.props
        const state = store.getState()
        
        return (
            <Link 
                active={ filter === state.visibilityFilter }
                onClick={ () => this.visibilityAction(filter) }
            >
                { children }
            </Link>
        )
    }
}

export default FilterLink