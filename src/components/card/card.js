import React, { useState } from "react";
import "./card.scss";

function Card(props) {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((count) => count + 1);
  return (
    <div className="card-container">
      <img src={props.img} at="1" />
      <div className="product-description">
        <h2>{props.productTitle}</h2>
        <p>{props.productDescription}</p>
      </div>
      <div className="action-buttons">
        <button id="add" onClick={increase}>
          {counter ? "ADDED  " + counter : "ADD TO CART"}
        </button>
        <button id="buy">BUY NOW</button>
      </div>
    </div>
  );
}

export default Card;
