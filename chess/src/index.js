import React, {Component} from "react"
import {render} from "react-dom"
import "./index.css"

const Square = (props) => {
    if (props.light) {
        return (
            <button className="square" onClick={ props.onClick } style={{ color: 'red' }}>
                { props.value }
            </button>
        )
    }
    return (
        <button className="square" onClick={ props.onClick }>
            { props.value }
        </button>
    )
}

class Board extends Component {
    renderSquare(i) {
        return (
            <Square 
                key={i}
                value={ this.props.squares[i] } 
                onClick={ () => this.props.onClick(i) }
                light={ this.props.lines.includes(i) }
            />
        )
    }

    render() {
        const rows = []
        for (let i = 0; i < 3; i++) {
            const row = []
            for (let j = 3 * i; j < 3 * i + 3; j++) {
                row.push(this.renderSquare(j))
            }
            rows.push(<div key={ i }>{ row }</div>)
        }
        return (
            <div>
                { rows }
            </div>
        )
    }
}

class Game extends Component {
    constructor() {
        super()
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if (calculateWinner(squares).winner || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({ 
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true,
        })
    }

    render() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares).winner
        const lines = calculateWinner(current.squares).lines

        const moves = history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start'
            
            if (move == this.state.stepNumber) {
                return (
                    <li key={ move }>
                        <a href="#11" onClick={ () => this.jumpTo(move) }><b>{ desc }</b></a>
                    </li>
                )
            }
            return (
                <li key={ move }>
                    <a href="#11" onClick={ () => this.jumpTo(move) }>{ desc }</a>
                </li>
            )
        })

        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={ current.squares }
                        onClick={ (i) => this.handleClick(i) }
                        lines= { lines }
                    />
                </div>
                <div className="game-info">
                    <div>
                        { status }
                    </div>
                    <ol>
                        { moves }
                    </ol>
                </div>
            </div>
        )
    }
}

// ========================================

render(
    <Game/>, 
    document.getElementById("root")
)

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                lines: [a, b, c]
            }
        }
    }
    return { square: null, lines: [] }
}