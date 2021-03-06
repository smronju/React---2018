import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    // Set orders from local storage if any
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fiesh to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishesh object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copye of existing state
    const fishes = { ...this.state.fishes };
    // 2. Update the fish
    fishes[key] = updatedFish;
    // 3. Set the updated fish to state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Remove the fish
    fishes[key] = null;
    // 3. Set the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of existing order state
    const order = { ...this.state.order };
    // 2. Either add the item to cart, or update the number in our cart
    order[key] = order[key] + 1 || 1;
    // 3. Update the state object
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. Take a copy of existing order state
    const order = { ...this.state.order };
    // 2. Remove item from cart
    delete order[key];
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
              <Fish key={key} index={key} fish={this.state.fishes[key]} addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>

        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />

        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
};

export default App;
