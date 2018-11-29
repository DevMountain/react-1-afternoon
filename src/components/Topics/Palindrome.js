import React, { Component } from 'react';

class Palindrome extends Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			palindrome: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.solveProblem = this.solveProblem.bind(this);
	}

	onChange(e) {
		this.setState({
			userInput: e.target.value
		});
	}

	onClick() {
		this.solveProblem(this.state.userInput);
	}

	solveProblem(input) {
		let trueArray = [];
		for (let i = 0; i < input.length; i++) {
			if (input[i] === input[input.length - 1 - i]) {
				trueArray.push(true);
			} else {
				trueArray.push(false);
			}
		}
		if (!trueArray.includes(false)) {
			this.setState({
				palindrome: 'true'
			});
		} else {
			this.setState({
				palindrome: 'false'
			});
		}
	}

	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Palindrome</h4>
				<input onChange={this.onChange} className="inputLine" />
				<button onClick={this.onClick} className="confirmationButton">
					Check
				</button>
				<span className="resultsBox">Palindrome: {this.state.palindrome}</span>
			</div>
		);
	}
}

export default Palindrome;
