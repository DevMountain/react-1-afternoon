import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  assignEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div>
        <h4> Even and Odds </h4>
        <p> Pass in a number of strings that are comma separated. For example: "1,2,3,4,5,6,7" </p>
        <input value={this.state.userInput} onChange={ (e) => this.handleChange(e) }></input>
        <button onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <p> Evens: { JSON.stringify(this.state.evenArray) } </p>
        <p> Odds: { JSON.stringify(this.state.oddArray) } </p>
      </div>
    )
  }
}