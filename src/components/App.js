import React, { Component } from 'react';
import Nav from './nav';
import AddItem from './addItem';
import Inventory from './inventory';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateView = this.updateView.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      currentView: 'inventory',
      itemNameInForm: '',
      targetAmountInForm: '',
      currentItems: []
    }
  }

  updateView(view) {
    this.setState({currentView: view});
  }

  handleInputChange(inputType, inputVal) {
    this.setState({[inputType]: inputVal});
  }

  onItemSubmit(event) {
    event.preventDefault();
    const newItem = {
      itemName: this.state.itemNameInForm,
      targetAmount: this.state.targetAmountInForm
    };

    this.setState((prevState) => ({
      itemNameInForm: '',
      targetAmountInForm: '',
      currentItems: prevState.currentItems.concat(newItem),
      currentView: 'inventory'
    }));
  }

  removeItem(itemIndex) {
    console.log('itemIndex:', itemIndex);
      let itemsClone = this.state.currentItems.slice();
      itemsClone.splice(itemIndex, 1);

    this.setState({currentItems: itemsClone});
  }

  displayView() {
    switch(this.state.currentView) {
      case 'inventory':
        return <Inventory currentItems={this.state.currentItems}
          removeItem={(itemIndex) => this.removeItem(itemIndex)}/>;

      case 'addItem':
        return <AddItem handleInputChange={this.handleInputChange}
          onItemSubmit={(event) => this.onItemSubmit(event)}
          itemNameInForm={this.state.itemNameInForm}
          targetAmountInForm={this.state.targetAmountInForm}/>;

      default:
        return 'no view to render';
    }
  }

  render() {
    return (
      <div className="App">
        <Nav onClick={this.updateView} />
        {this.displayView()}
      </div>
    );
  }
}

export default App;
