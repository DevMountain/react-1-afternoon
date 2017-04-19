import React, { Component } from 'react';
import './App.css';

// Components
import Header from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import Workspace from './component/Workspace/Workspace';

class App extends Component {

  constructor() {
    super();

    this.state = {
      topics: [
        { id: 1, label: 'Palindrome', component: "Palindrome" },
        { id: 2, label: 'Reverse Array', component: "ReverseArray" }
      ],

      selectedTopic: null
    };
  }

  renderTopic(topic) {
    this.setState({ selectedTopic: topic });
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation topics={this.state.topics} renderTopic={this.renderTopic.bind(this)} />
        <Workspace selectedTopic={this.state.selectedTopic} />
      </div>
    )
  }
}

export default App;
