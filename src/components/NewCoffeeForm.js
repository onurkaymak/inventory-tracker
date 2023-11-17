import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../utils/ReusableForm";

const NewCoffeeForm = (props) => {

  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();

    const newCoffee = {
      id: v4(),
      name: event.target[0].value,
      origin: event.target[1].value,
      price: parseInt(event.target[2].value),
      roast: event.target[3].value,
      quantity: 130
    }

    props.onCreateCoffee(newCoffee);
  }

  return (
    <React.Fragment>
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