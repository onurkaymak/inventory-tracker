import React from "react";
import PropTypes from "prop-types";

const CoffeeDetail = (props) => {
  const { coffee, onCoffeeSale } = props;

  return (
    <React.Fragment>
      <div>Name: <strong>{coffee.name}</strong></div>
      <div>Coffee Id: {coffee.id}</div>
      <div>Origin: {coffee.origin}</div>
      <div>Roast: {coffee.roast}</div>
      <div>Price: ${coffee.price}</div>
      <div>Quantity: {coffee.quantity} lb</div>
      <hr />
      <button onClick={() => onCoffeeSale(coffee.id)}>Sell Coffee (1lb)</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onCoffeeSale: PropTypes.func
};



export default CoffeeDetail;