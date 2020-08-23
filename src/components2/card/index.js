import React from "react";
import Carousel from '../carousel'
import "./card.scss";

export default function ({imagesList}) {
  console.log(imagesList);
  return (
    <div class="product-card">
      <div className="main-card">
        <div className="images-container">
          <Carousel imagesList={imagesList} />
        </div>
        <div class="product-details">
          <div class="product-title-price">
            <h3>Puma Running sneakers for men</h3>
            <h4 class="price">$34.00</h4>
          </div>
          <div class="product-description">
            <p>
              best for running in any terrain. Lightweight, strong and most..
            </p>
          </div>
        </div>
      </div>
      <div class="action-buttons">
        <button className="add">Add to Cart</button>
        <button className="buy">Buy Now</button>
      </div>
    </div>
  );
}
