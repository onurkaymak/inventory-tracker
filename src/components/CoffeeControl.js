import React from 'react';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCoffeeList: []
    };
  }



  render() {
    return (
      <h1>Coffee Control Test</h1>
    )
  }
}

export default CoffeeControl;