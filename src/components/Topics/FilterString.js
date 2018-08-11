import React, { Component } from 'react'

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                "Hello",
                "Darkness",
                "My",
                "Old",
                "Friend",
                "Hello",
                "Darkness",
                "My",
                "Old",
                "Friend"
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleTextChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }
    handleFilter = () => {
        const copyUnfilteredArray = this.state.unFilteredArray.concat();
        const searchVal = this.state.userInput
        const newArray = copyUnfilteredArray.filter(item => item.includes(searchVal))
        console.log(newArray);
        this.setState({
            filteredArray: newArray
        })
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"></span>
            <input className="inputLine" onChange={this.handleTextChange}></input>
            <button className="confirmationButton" onClick={this.handleFilter}> Filter </button>
            <span className="resultsBox filterStringRB">Filtered String: [{
                this.state.filteredArray.map(item => JSON.stringify(item) + ', ')
            }]
            </span>
          </div>
        )
    }
}

export default FilterString;