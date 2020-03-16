import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: []
  };

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi=>this.setState({sushi: sushi}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;