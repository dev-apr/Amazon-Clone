import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Card from './components/Card';
import Shirt from './components/Subheader/Shirt';
import Pant from './components/Subheader/Pant';
import Cart from './components/Header/Cart';
import Login from './components/Login';

function App() {
  let [inputState, setInputState] = useState('');
  let [cart, setCart] = useState([]);

  function addToCart(product) {
    const productInCart = cart.find((e) => e.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((e) =>
          e.id === product.id
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : e
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function deleteToCart(product) {
    const productinCarttoDelete = cart.find((ele) => ele.id === product.id);
    if (productinCarttoDelete.quantity === 1) {
      setCart((cart) =>
        cart.filter((ele) => {
          return ele.id !== productinCarttoDelete.id;
        })
      );
    } else {
      setCart(
        cart.map((ele) =>
          ele.id === product.id
            ? {
                ...productinCarttoDelete,
                quantity: productinCarttoDelete.quantity - 1,
              }
            : ele
        )
      );
    }
  }
  function removeCart(product) {
    setCart(cart.filter((ele) => ele.id != product.id));
  }

  return (
    <>
      <BrowserRouter>
        <Header setInputState={{ setInputState, cart }} />
        <Subheader />
        <Routes>
          <Route
            path="/"
            element={<Card inputState={{ inputState, addToCart }} />}
          />
          <Route path="/pants" element={<Pant cart={{ addToCart }} />} />
          <Route
            path="/cartpage"
            element={
              <Cart cart={{ cart, removeCart, addToCart, deleteToCart }} />
            }
          />
          <Route path="/shirts" element={<Shirt cart={{ addToCart }} />} />
          <Route path="/login" element={<Login/>}/>
             </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
