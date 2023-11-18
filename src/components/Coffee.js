import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {

  return (
    <React.Fragment>
      <div onClick={() => props.onCoffeeClicked(props.id)}>
        {props.isOutOfStock === true && <strong>This product is currently sold out.</strong>}
        <br />
        <br />
        <div>Name: <strong>{props.name}</strong></div>
        <br />
        <div>Origin: {props.origin}</div>
        <div>Roast: {props.roast}</div>
        <div>Price: ${props.price}</div>
        <div>Quantity: {props.quantity} lb</div>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  id: PropTypes.string,
  onCoffeeClicked: PropTypes.func
};

export default Coffee;