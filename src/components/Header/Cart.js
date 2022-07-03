import React, { useState } from 'react';
import './Cart.css';

export default function Cart({ cart }) {
  return (
    <>
      <div className="cart-parent">
        {cart.cart.map((ele) => {
          return (
            <>
              <div className="cardItem-container">
                <div className="cartImage-container">
                  <img src={ele.image} alt="Item" />
                </div>
                <div className="cartItem-price">
                  <div>Price</div>
                  <div>₹{ele.price}</div>
                </div>
                <div className="cartItem-quantity">
                  <div>Quantity</div>
                  <div className="quantity-button">
                    <button onClick={() => cart.addToCart(ele)}>+</button>
                    <div>{ele.quantity}</div>
                    <button onClick={() => cart.deleteToCart(ele)}>-</button>
                  </div>
                </div>
                <div className="deleteCart-button">
                  <button onClick={() => cart.removeCart(ele)}>
                    Delete from cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
