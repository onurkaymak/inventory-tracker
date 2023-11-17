import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';


class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCoffeeList: [],
      isAddFormVisible: false,
      selectedCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        selectedCoffee: null,
        isAddFormVisible: false
      })
    } else {
      this.setState(prevState => ({
        isAddFormVisible: !prevState.isAddFormVisible
      }));
    }
  }

  handleNewCoffee = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);

    this.setState({
      mainCoffeeList: newMainCoffeeList,
      isAddFormVisible: false
    });
  };

  handleSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({ selectedCoffee }); // ES6 way to set object key-value.
  };

  handleCoffeeSale = (id) => {
    let selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    let newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    selectedCoffee.quantity--;
    newMainCoffeeList.push(selectedCoffee);

    this.setState({
      mainCoffeeList: newMainCoffeeList
    })

    console.log(newMainCoffeeList)
  }


  render() {
    let visibleComponent = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null) {
      visibleComponent = <CoffeeDetail coffee={this.state.selectedCoffee} onCoffeeSale={this.handleCoffeeSale} />
      buttonText = "Return to Coffee List"
    }
    else if (this.state.isAddFormVisible) {
      visibleComponent = <NewCoffeeForm onCreateCoffee={this.handleNewCoffee} />
      buttonText = "Return to Coffee List"
    } else {
      if (this.state.mainCoffeeList.length !== 0) {
        visibleComponent = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleSelectedCoffee} />
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