import React, { Component } from 'react';

class HelloReact extends Component {
    state = {
        switch: 0,
        name: this.props.name1
    }

    clickHander = () => {
        const { name1, name2 } = this.props;

        console.log(this.refs); //DOM对象集合

        if (this.state.switch === 0) {
            console.log(name1);
            this.setState({
                switch: 1,
                name: name2
            })
        } else {
            console.log(name2);
            this.setState({
                switch: 0,
                name: name1
            })
        }
    }

    refCallback = (elem) => {
        console.log(elem);
    }

    componentDidMount (props) {
        console.log(this.refs);
    }

    render () {
        return (
            <div className="container" onClick={this.clickHander}>
                <div ref="hello" className="hello">Hello</div>
                <div ref={this.refCallback} className="react">React</div>
            </div>
        )
    }
}

export default HelloReact;