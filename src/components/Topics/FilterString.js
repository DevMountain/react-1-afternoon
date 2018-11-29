import React, { Component } from 'react';

class FilterString extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: [
				'Michael',
				'Jim',
				'Pam',
				'Dwigt',
				'Toby',
				'Meredith',
				'Creed',
				'Stanley'
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
	solveProblem(input) {
		let filteredArray = [];
		for (let i = 0; i < this.state.unFilteredArray.length; i++) {
			if (this.state.unFilteredArray[i].includes(input)) {
				filteredArray.push(this.state.unFilteredArray[i]);
			}
		}
		this.setState({
			filteredArray
		});
	}
	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Filter String</h4>
				<span className="puzzleText">
					Names: {JSON.stringify(this.state.unFilteredArray)}
				</span>
				<input onChange={this.onChange} className="inputLine" />
				<button onClick={this.onClick} className="confirmationButton">
					Filter
				</button>
				<span className="resultsBox filterStringRB">
					{' '}
					Filtered Names: {JSON.stringify(this.state.filteredArray)}
				</span>
			</div>
		);
	}
}

export default FilterString;
