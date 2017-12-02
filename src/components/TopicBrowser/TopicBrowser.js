import React, {Component} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/Palindrome';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';



class TopicBrowser extends Component {




render(){
    return ( //YOU NEED TO HAVE A DIV TAG OR SOME OTHER HTML LIKE ELEMENT OR ELSE YOU CANNOT RENDER ANYTHING TO THE PAGE
        <div>   
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
        </div>
    )
    }
}


export default TopicBrowser;