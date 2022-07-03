import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ setInputState }) {
  function handleChange(e) {
    let value = e.target.value;
    setInputState.setInputState(value);
    console.log(value);
  }
  return (
    <>
      <div className="header">
        <Link to="/" className="img-container">
          <div>
            <img
              src="https://images.app.goo.gl/DodQG8Q9SmuZgNu17"
              alt="Amazon Logo"
            />
          </div>
        </Link>
        <div className="content-container">
          <div className="hello">Hello</div>
          <div className="address">Select your address</div>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search your product here"
            onChange={handleChange}
          ></input>
        </div>
        <Link to="/cartpage" className="cartButton-box">
          <div className="cartbox-container">
            <h3>Cart</h3>
            <h3 id="cart-quantity">{setInputState.cart.length}</h3>
          </div>
        </Link>
        <Link to="/login" className="login-box">
          <div>
            <h3>Login</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
