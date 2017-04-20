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

  handleChange(val) {
    this.setState({ userInput: val });
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
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <p> Evens: { JSON.stringify(this.state.evenArray) } </p>
        <p> Odds: { JSON.stringify(this.state.oddArray) } </p>
      </div>
    )
  }
}