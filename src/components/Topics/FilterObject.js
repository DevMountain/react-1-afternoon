import React, { Component } from 'react';

class FilterObject extends Component {
	constructor() {
		super();
		this.state = {
			unfilteredArray: [
				{ type: 'cat', color: 'black', age: 2, 'favorite toy': 'yarn' },
				{ type: 'dog', name: 'spot', age: 6, 'favorite food': 'peanut butter' },
				{ name: 'eric', species: 'human', age: 28, 'favorite color': 'red' }
			],
			userInput: '',
			filteredArray: []
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

	solveProblem(text) {
		let filteredArray = [];
		for (let i = 0; i < this.state.unfilteredArray.length; i++) {
			if (this.state.unfilteredArray[i][text]) {
				filteredArray.push(this.state.unfilteredArray[i]);
			}
		}
		this.setState({
			filteredArray
		});
	}

	render() {
		return (
			<div className="puzzleBox filterObjectPB">
				<h4>Filter Object</h4>
				<span className="puzzleText">
					Original {JSON.stringify(this.state.unfilteredArray)}
				</span>
				<input onChange={this.onChange} className="inputLine" />
				<button onClick={this.onClick} className="confirmationButton">
					Filter
				</button>
				<span className="resultsBox filterObjectRB">
					Filtered: {JSON.stringify(this.state.filteredArray)}
				</span>
			</div>
		);
	}
}

export default FilterObject;
