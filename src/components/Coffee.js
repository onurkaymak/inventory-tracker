import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {

  return (
    <React.Fragment>
      <div>
        <div>Name: <strong>{props.name}</strong></div>
        <div>Coffee Id: {props.id}</div>
        <div>{props.origin}</div>
        <div>{props.roast}</div>
        <div>{props.price}</div>
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