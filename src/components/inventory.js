import React from 'react';

export default function Inventory(props) {
  function renderCard(item, index) {
    return (
      <div className="card" key={index}>
        <button type="button" onClick={() => props.removeItem(index)}>remove</button>
        <p className="itemName">{item.itemName}</p>
        <div className="amountGroup">
          <span className="currentAmount">{item.currentAmount}</span>
          &nbsp;/&nbsp;
          <span className="targetAmount">{item.targetAmount}</span>
        </div>

        <div className="itemChangers">
          <div className="decrementor"
            onClick={() => props.decrementItem(index)}>{`<`}</div>
          <div className="incrementor"
            onClick={() => props.incrementItem(index)}>{`>`}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="inventory">
      <h2 className="headline">Current Items</h2>
      {props.currentItems.map((item, index) => renderCard(item, index))}
    </div>
  );
};
