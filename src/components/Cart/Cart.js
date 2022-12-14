import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + tax + shipping;

  return (
    <div className="cart">
      <h3 className="text-2xl">Order Summary In Cart</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping price: {cart.length}</p>
      <p>Tax: {tax}</p>
      <h5>Grand total: {grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
