import React from "react";
// import PropTypes from "prop-types";
// import { v4 } from 'uuid';
import ReusableForm from "../utils/ReusableForm";

const NewCoffeeForm = () => {

  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();
    console.log(event.target);
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

};

export default NewCoffeeForm;