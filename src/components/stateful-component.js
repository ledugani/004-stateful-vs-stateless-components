import React from 'react';

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      newItem: null
    }

    // in order to use the THIS keyword in handleChange() and addItem(), we need to bind the context of the THIS keyword to the class
    this.addNewItemToState = this.addNewItemToState.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addNewItemToState() {
    this.setState({
      items: [...this.state.items, this.state.newItem]
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.items.map(item => <li> { item } </li>)
          }
        </ul>
        <input
          type="text"
          placeholder="Enter a new item"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button
          onClick={this.addNewItemToState}
        >
          Add Item to List
        </button>
      </div>
    )
  }
}