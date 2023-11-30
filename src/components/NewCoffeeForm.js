import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../utils/ReusableForm";
import { useState } from "react";

const NewCoffeeForm = (props) => {

  const [valErr, setValErr] = useState(false);

  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();


    // Set input values as variables to use in validation check.
    const name = event.target[0].value;
    const origin = event.target[1].value;
    const price = parseInt(event.target[2].value);
    const roast = event.target[3].value;

    // Validation check for empty input fields and price for NaN values.
    if (!name || !origin || isNaN(price) || !roast) {
      setValErr(true);
      return
    }

    const newCoffee = {
      id: v4(),
      name,
      origin,
      price,
      roast,
      quantity: 130,
      isOutOfStock: false
    }

    props.onCreateCoffee(newCoffee);
  }

  return (
    <React.Fragment>
      {valErr && <h2>Please fill all the empty inputs, price must be a number.</h2>}
      <ReusableForm

        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add New Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onCreateCoffee: PropTypes.func
};

export default NewCoffeeForm;