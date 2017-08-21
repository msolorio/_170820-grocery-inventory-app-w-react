import React from 'react';

export default function AddItem(props) {
  return (
    <div className="addItem">
      <form className="form" onSubmit={(event) => props.onItemSubmit(event)}>
        <h2 className="headline">Add an Item</h2>

        <div className="formGroup">
          <label className="label" htmlFor="name">Item Name:</label>
          <input className="input"
            id="name"
            value={props.itemNameInForm}
            onChange={(event) => props.handleInputChange('itemNameInForm', event.target.value)}/>
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="targetAmount">Target Amount:</label>
          <input className="input"
            type="number"
            id="targetAmount"
            value={props.targetAmountInForm}
            onChange={(event) => props.handleInputChange('targetAmountInForm', event.target.value)}/>
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}
