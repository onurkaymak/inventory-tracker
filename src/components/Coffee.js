import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {

  return (
    <React.Fragment>
      <div>
        <h3>{props.name} - {props.id}</h3>
        <div>{props.origin}</div>
        <div>{props.price}</div>
        <div>{props.roast}</div>
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