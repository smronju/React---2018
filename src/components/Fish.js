import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToCart(this.props.index);
  };

  render() {
    const { name, image, price, description, status } = this.props.fish;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />

        <h3 className="fish-name">
          {name} <span className="price">{formatPrice(price)}</span>
        </h3>

        <p>{description}</p>

        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add To Cart' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
