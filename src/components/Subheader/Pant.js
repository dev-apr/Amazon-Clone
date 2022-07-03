import React from 'react';
import '../Card.css';
import data from '../Data';

export default function Pant({ cart }) {
  let pantComp = data.filter((e) => e.type === 'pant');
  return (
    <>
      <div className="parent">
        {pantComp.map((ele) => {
          return (
            <div className="card">
              <div class="simg-container">
                <img src={ele.image} alt="Shirt"></img>
              </div>
              <div className="name">{ele.title}</div>
              <div className="style">{ele.style}</div>
              <div className="price">{ele.price}</div>
              <div className="stock">{ele.totalquantity}</div>
              <div className="add">
                <button onClick={() => cart.addToCart(ele)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
