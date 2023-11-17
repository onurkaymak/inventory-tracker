import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../utils/ReusableForm";

const NewCoffeeForm = (props) => {

  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();

    const newCoffee = {
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast,
      id: v4()
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