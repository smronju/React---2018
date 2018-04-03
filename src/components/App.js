import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToCart = key => {
    // 1. Take a copy of existing order state
    const order = { ...this.state.order };

    // 2. Either add the item to cart, or update the number in our cart
    order[key] = order[key] + 1 || 1;

    // 3. Update the state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />

          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} index={key} fish={this.state.fishes[key]} addToCart={this.addToCart} />
            ))}
          </ul>
        </div>

        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
