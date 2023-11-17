import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

const CoffeeList = (props) => {


  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) =>
        <Coffee
          id={coffee.id}
          key={coffee.id}
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          quantity={coffee.quantity}
          onCoffeeClicked={props.onCoffeeSelection}
          isOutOfStock={coffee.isOutOfStock}
        />)}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;