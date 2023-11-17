import React from 'react';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCoffeeList: []
    };
  }



  render() {
    let visibleComponent = null;
    let buttonText = null;

    if (this.state.mainCoffeeList.length === 0) {
      visibleComponent = "There is nothing in the inventory yet.";
      buttonText = "Add Coffee to Inventory"
    }




    return (
      <React.Fragment>
        {visibleComponent}
        <button>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;