import React, { Component } from 'react';

class Sum extends Component {
	constructor() {
		super();
		this.state = {
			number1: 0,
			number2: 0,
			sum: null
		};
		this.onChange1 = this.onChange1.bind(this);
		this.onChange2 = this.onChange2.bind(this);
		this.onClick = this.onClick.bind(this);
		this.solveProblem = this.solveProblem.bind(this);
	}

	onChange1(e) {
		this.setState({
			number1: e.target.value
		});
	}

	onChange2(e) {
		this.setState({
			number2: e.target.value
		});
	}

	onClick() {
		this.solveProblem(this.state.number1, this.state.number2);
	}

	solveProblem(one, two) {
		let sum = Number(one) + Number(two);
		this.setState({
			sum
		});
	}

	render() {
		return (
			<div className="puzzleBox sumPB">
				<h4>Sum</h4>
				<input type="number" onChange={this.onChange1} className="inputLine" />
				<input type="number" onChange={this.onChange2} className="inputLine" />
				<button onClick={this.onClick} className="confirmationButton">
					Add
				</button>
				<span className="resultsBox">Sum: {this.state.sum}</span>
			</div>
		);
	}
}

export default Sum;
