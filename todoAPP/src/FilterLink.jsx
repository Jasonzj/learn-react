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

export default FilterLink