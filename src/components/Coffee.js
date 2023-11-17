import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {

  return (
    <React.Fragment>
      <div>
        <div>Name: <strong>{props.name}</strong></div>
        <div>Coffee Id: {props.id}</div>
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
  id: PropTypes.string
};

export default Coffee;