import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    startIndex: 0,
    wallet: 100,
    eatenSushi: []
  };

  limitSushiRender() {
    return this.state.sushi.slice(this.state.startIndex, this.state.startIndex+4)
  }

  moreSushi = () => {
    this.setState({startIndex: this.state.startIndex+4})
    // this.setState(prevState=>{
    //   return {[this.state.startIndex]: prevState.startIndex+4}
    // })
  }

  handleSushiClick = (amount, id) => {
    this.setState({wallet: this.state.wallet-amount})
    console.log(id)
    this.setState({eatenSushi: [...this.state.eatenSushi, id]})
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi=>this.setState({sushi: sushi}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleSushiClick={this.handleSushiClick} moreSushi={this.moreSushi} sushi={this.limitSushiRender()} wallet={this.state.wallet}/>
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;