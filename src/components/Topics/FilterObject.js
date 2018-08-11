import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {name: 'Sean', age: 24},
                {name: 'Austin' },
                {name: 'Hunter'}
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
        const newArray = this.state.unFilteredArray.concat();
        let property = this.state.userInput; 
        const newerArray = newArray.filter(item => item[property] ? item : null)

        this.setState({
            filteredArray: newerArray,
            userInput: ''
        })
        
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"></span>
            <input className="inputLine" onChange={this.handleTextChange}></input>
            <button className="confirmationButton" onClick={this.handleFilter}> Filter </button>
            <span className="resultsBox filterObjectRB">Filtered: [{
                this.state.filteredArray.map(item => JSON.stringify(item) + ', ')
            }]</span>
          </div>
        )
    }
}

export default FilterObject;