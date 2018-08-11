import React, { Component } from 'react'


class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleNumber1 = (event) => {
        this.setState({
            number1: event.target.value,
            number2: this.state.number2,
            sum: this.state.sum
        })
    }
    handleNumber2 = (event) => {
        this.setState({
            number1: this.state.number1,
            number2: event.target.value,
            sum: this.state.sum
        })
    }
    handleSum = () => {
        const number1 = this.state.number1,
              number2 = this.state.number2
        const total = parseInt(number1) + parseInt(number2);
        this.setState({
            number1: this.state.number1,
            number2: this.state.number2,
            sum: total
        })
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" type="number" onChange={this.handleNumber1}></input>
            <input className="inputLine" type="number" onChange={this.handleNumber2}></input>
            <button className="confirmationButton" onClick={this.handleSum}> Add </button>
            <span className="resultsBox">Sum: [{this.state.sum}]</span>
          </div>
        )
    }
}

export default Sum;