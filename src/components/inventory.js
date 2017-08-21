import React from 'react';

export default function Inventory(props) {
  function renderCard(item, index) {
    return (
      <div className="card" key={index}>
        <button type="button" onClick={() => props.removeItem(index)}>remove</button>
        <p className="itemName">{item.itemName}</p>
        <p className="targetAmount">{item.targetAmount}</p>
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
