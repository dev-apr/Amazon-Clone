import React from 'react';
import data from './Data';
import './Card.css';

export default function Card({ inputState }) {
  let filteredData = data.filter((e) =>
    e.type.includes(inputState.inputState.toLowerCase())
  );

  return (
    <>
      <div className="parent">
        {filteredData.length === 0
          ? data.map((ele) => {
              return (
                <>
                  <div className="card">
                    <div class="simg-container">
                      <img src={ele.image} alt="Shirt"></img>
                    </div>
                    <div className="name">{ele.title}</div>
                    <div className="style">{ele.style}</div>
                    <div className="price">₹{ele.price}</div>
                    <div className="stock">
                      Only {ele.totalquantity} items left
                    </div>
                    <div className="add">
                      <button onClick={() => inputState.addToCart(ele)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          : filteredData.map((ele) => {
              return (
                <>
                  <div className="card">
                    <div class="simg-container">
                      <img src={ele.image} alt="Shirt"></img>
                    </div>
                    <div className="name">{ele.title}</div>
                    <div className="style">{ele.style}</div>
                    <div className="price">₹{ele.price}</div>
                    <div className="stock"> Only {ele.totalquantity} items left</div>
                    <div className="add">
                      <button onClick={() => inputState.addToCart(ele)}>
                        Add to cart
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
