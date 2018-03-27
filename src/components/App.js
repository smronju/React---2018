import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fiesh to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishesh object to state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>

        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
