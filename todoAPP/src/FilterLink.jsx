import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from './Link'
import setVisibilityFilter from './action/setVisibilityFilter'

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick() {
            dispatch(setVisibilityFilter(props.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

// class FilterLink extends Component {
//     componentDidMount() {
//         this.unsubscribe = this.store.subscribe(() => 
//             this.forceUpdate()
//         )
//     }

//     componentWillUnmount() {
//         this.unsubscribe()
//     }

//     visibilityAction = (filter) => {
//         this.store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter
//         })
//     }

//     render() {
//         const {filter, children} = this.props
//         const {store} = this.context
//         const state = store.getState()
//         this.store = store
        
//         return (
//             <Link 
//                 active={filter === state.visibilityFilter}
//                 onClick={() => this.visibilityAction(filter)}
//             >
//                 {children}
//             </Link>
//         )
//     }
// }
// FilterLink.contextTypes = {
//     store: React.PropTypes.object
// }

export default FilterLink