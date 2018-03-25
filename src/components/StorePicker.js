import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  gotoStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render = () => (
    <form className="store-selector" onSubmit={this.gotoStore}>
      <h2>Please Enter A Store</h2>
      <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
      <button type="submit">Visit Store -></button>
    </form>
  );
}

export default StorePicker;
