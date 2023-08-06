import React from 'react'
import storedata from '../../../data';
import { useOutletContext } from 'react-router-dom'
import Card from './Card';

const Cart = () => {
  const [cart] = useOutletContext();

  return (
    <div className="cart-grid">
        <div className="left-pane">
          <h1>Display Cart Items Here</h1>
          <h3>Item 1</h3>
          <h3>Item 2</h3>
          <h3>Item 3</h3>
          <h3>Item 4</h3>
        </div>
        <div className="right-pane">
          <div className="flex-container">
            <h1>Display Total/Checkout Here</h1>
            <p>Items: $397.00</p>
            <p>Tax/Charges: $3.00</p>
            <hr />
            <p>Total: $400.00</p>
            <button>Check Out</button>
          </div>
        </div>
    </div>
  )
}

export default Cart