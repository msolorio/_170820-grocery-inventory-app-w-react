import React from 'react';

export default function Nav(props) {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="button"
          onClick={() => props.onClick('addItem')}>Add Item</li>
        <li className="button"
          onClick={() => props.onClick('inventory')}>View Inventory</li>
      </ul>
    </nav>
  )
}
