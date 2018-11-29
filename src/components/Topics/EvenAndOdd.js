import React, { Component } from 'react';

class EvenAndOdd extends Component {
	constructor() {
		super();
		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: []
		};
		this.solveProblem = this.solveProblem.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {
		this.setState({
			userInput: e.target.value
		});
	}

	onClick() {
		this.solveProblem(this.state.userInput);
	}

	solveProblem() {
		let evensArray = [];
		let oddsArray = [];
		for (let i = 0; i < this.state.userInput.length; i++) {
			if (this.state.userInput[i] % 2 === 0) {
				evensArray.push(parseInt(this.state.userInput[i], 10));
			} else if (this.state.userInput[i] % 2 === 1) {
				oddsArray.push(parseInt(this.state.userInput[i], 10));
			}
		}
		this.setState({
			evenArray: evensArray,
			oddArray: oddsArray
		});
	}

	render() {
		return (
			<div className="puzzleBox evenAndOddPB">
				<h4>Evens and Odds</h4>
				<input onChange={this.onChange} className="inputLine" />
				<button onClick={this.solveProblem} className="confirmationButton">
					Split:
				</button>
				<span className="resultsBox">
					Evens:{JSON.stringify(this.state.evenArray)}
				</span>
				<span className="resultsBox">
					Odds:{JSON.stringify(this.state.oddArray)}
				</span>
			</div>
		);
	}
}

export default EvenAndOdd;
