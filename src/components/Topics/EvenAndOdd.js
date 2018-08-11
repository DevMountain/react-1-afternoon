import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleTextChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    splitInput = () => {
        const newArray = this.state.userInput.split(',');
        const evens = [];
        const odds = [];
        newArray.map(num => {
            parseInt(num);
            num%2===0 ? evens.push(num) : odds.push(num);
        });
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
            <h4> Evens and Odds </h4>
            <input className="inputLine" onChange={this.handleTextChange}></input>
            <button className="confirmationButton" onClick={this.splitInput}> Split </button>
            <span className="resultsBox">Evens: [{this.state.evenArray} ]</span>
            <span className="resultsBox">Odds: [{this.state.oddArray} ]</span>
          </div>
        )
    }
}

export default EvenAndOdd;