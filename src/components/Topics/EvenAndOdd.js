import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    evensAndOdds() {
        var split = this.state.userInput.split(',');
        var odds = [];
        var evens = [];
        split.forEach((elem) => {
            if (elem % 2 === 0) {
                evens.push(elem);
            } else {
                odds.push(elem)
            }
        })

        this.setState({oddArray: odds.join(', '), evenArray: evens.join(', ')})

    }

    onUpdate(val){
        // console.log(val)
        this.setState({userInput: val})
    }



    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" 
                    value={this.state.userInput} 
                    onChange={(e) => this.onUpdate(e.target.value)} />
                
                <button className="confirmationButton" onClick={(event) => this.evensAndOdds(this.state.userInput)}>Split</button>
                <span className="resultsBox">Even: {(this.state.evenArray)}</span>
                <span className="resultsBox">Odd {(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;