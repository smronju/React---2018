import React from 'react';

class Fish extends React.Component{
  render() {
    
    const { name, image, price, description, status } = this.props.fish;

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name} <span className="price">{price}</span>
        </h3>
        <p>{description}</p>
        <button>Add To Cart</button>
      </li>
    )
  }
}

export default Fish;