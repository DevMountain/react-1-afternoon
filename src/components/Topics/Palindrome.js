import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleTextChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    handlePalindrome = () => {
        if(this.state.userInput === this.state.userInput.split('').reverse().join('')) {
            this.setState({
                userInput: '',
                palindrome: 'true'
            })
        } else {
            this.setState({
                userInput: '',
                palindrome: 'false'
            })
        }
    }
    render() {
        return (
            <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={this.handleTextChange}></input>
            <button className="confirmationButton" onClick={this.handlePalindrome}> Check </button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
          </div>
        )
    }
}

export default Palindrome;