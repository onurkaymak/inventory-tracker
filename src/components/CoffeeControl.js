import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';


class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCoffeeList: [],
      isAddFormVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isAddFormVisible: !prevState.isAddFormVisible
    }));
  }

  handleNewCoffee = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);

    this.setState({
      mainCoffeeList: newMainCoffeeList,
      isAddFormVisible: false
    });
  };


  render() {
    let visibleComponent = null;
    let buttonText = null;


    if (this.state.isAddFormVisible) {
      visibleComponent = <NewCoffeeForm onCreateCoffee={this.handleNewCoffee} />
      buttonText = "Return to Coffee List"
    }
    else if (this.state.mainCoffeeList.length === 0) {
      visibleComponent = "There is nothing in the inventory yet.";
      buttonText = "Add Coffee to Inventory"
    }




    return (
      <React.Fragment>
        {visibleComponent}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;