import React from "react";
import ReusableForm from "../utils/ReusableForm";
import PropTypes from "prop-types";
import { useState } from "react";


const EditCoffeeForm = (props) => {
  const { coffee, onEditCoffee } = props;

  const [valErr, setValErr] = useState(false);


  function handleEditCoffeeFormSubmission(event) {
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


    const editedCoffee = {
      id: coffee.id,
      name,
      origin,
      price,
      roast,
      quantity: coffee.quantity,
      isOutOfStock: coffee.isOutOfStock
    }

    onEditCoffee(editedCoffee);
  }

  return (
    <React.Fragment>
      {valErr && <h2>Please fill all the empty inputs, price must be a number.</h2>}
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Edit Coffee" />
    </React.Fragment>
  );
};

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;

