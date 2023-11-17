import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';


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
    } else {
      if (this.state.mainCoffeeList.length !== 0) {
        visibleComponent = <CoffeeList coffeeList={this.state.mainCoffeeList} />
      } else {
        visibleComponent = "There is nothing in the inventory yet."
      }
      buttonText = "Add New Coffee"
    }


    return (
      <React.Fragment>
        {visibleComponent}
        <br />
        <br />
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;