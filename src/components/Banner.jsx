import React from 'react';
import './banner.css';

export default function Banner() {
  return (
    <div className="outer-box">
      <div className="inner-box">
        <img
          src="https://i.pinimg.com/736x/c0/dc/37/c0dc37039160065c8df2fb4b1d2408f1.jpg"
          alt="Saree Banner 1"
        />
      </div>

      <div className="inner-box">
        <img
          src="https://i.pinimg.com/736x/59/07/12/590712beaf5acac6a01b70c3ea600910.jpg"
          alt="Saree Banner 2"
        />
      </div>

      <div className="inner-box">
        <img
          src="https://i.pinimg.com/736x/5e/2d/b7/5e2db765ab3b76d6feb11fb6371bdcf4.jpg"
          alt="Saree Banner 3"
        />
      </div>
    </div>
  );
}
