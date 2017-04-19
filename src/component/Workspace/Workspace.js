import React, { Component } from 'react';
import './Workspace.css';

// Topics
import Palindrome from '../Topics/Palindrome';
import ReverseArray from '../Topics/ReverseArray';

const Components = {
  "Palindrome": <Palindrome />,
  "ReverseArray": <ReverseArray />
};

class Workspace extends Component {
  render() {
    return (
      <div id="workspace-component">
          <p id="workspace-header"> Workspace </p>
          {
            this.props.selectedTopic
            ? Components[this.props.selectedTopic]
            : <p> No topic selected </p>
          }
      </div>
    )
  }
}

export default Workspace;