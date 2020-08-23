import React, { useState } from "react";
import "./carousel.scss";


export default function ({imagesList}) {
  console.log(imagesList);
  const [imageNum, setImageNum] = useState(0);
  const imgStyle = {
    transform: `translateX(${imageNum * -100}%)`,
  };
  const forward = () =>
    imageNum !== imagesList.length - 1 && setImageNum(imageNum + 1);

  const backward = () => imageNum !== 0 && setImageNum(imageNum - 1);

  return (
    <div className="carousel-component">
      <button onClick={() => backward()} className="backward">
        Prev
      </button>
      <button onClick={() => forward()} className="forward">
        Next
      </button>
      <div class="carousel-container">
        {imagesList.map((img) => (
          <img style={imgStyle} src={img} alt="1" />
        ))}
      </div>
    </div>
  );
}
