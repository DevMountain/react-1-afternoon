import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div id="navigation-component">
        <p id="navigation-header"> Topics </p>

        <ul>
        { this.props.topics.map( (topic) => {
          return (
            <li key={topic.id} className="navigation-topic" onClick={ () => this.props.renderTopic(topic.component) }> { topic.label } </li>
          )
        })}
        </ul>

      </div>
    )
  }
}

export default Navigation;