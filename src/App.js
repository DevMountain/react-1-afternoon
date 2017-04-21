import React, { Component } from 'react';
import './App.css';
import MuiThemeProivder from 'material-ui/styles/MuiThemeProvider';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  render() {
    return (
      <MuiThemeProivder>
        <TopicBrowser />
      </MuiThemeProivder>
    )
  }
}

export default App;
