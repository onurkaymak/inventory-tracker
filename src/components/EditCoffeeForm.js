import React from "react";
import ReusableForm from "../utils/ReusableForm";
import PropTypes from "prop-types";

const EditCoffeeForm = (props) => {
  const { coffee, onEditCoffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();

    const editedCoffee = {
      id: coffee.id,
      name: event.target[0].value,
      origin: event.target[1].value,
      price: parseInt(event.target[2].value),
      roast: event.target[3].value,
      quantity: coffee.quantity,
      isOutOfStock: coffee.isOutOfStock
    }

    onEditCoffee(editedCoffee);
  }

  return (
    <React.Fragment>
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

