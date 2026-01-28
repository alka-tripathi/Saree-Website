import React from 'react';
import './Card.css';
import Banner from './Banner';

function Card({ saree }) {
  console.log(saree);
  return (
    <div className="card-container">
      <div className="saree-card">
        <div className="image-wrapper">
          <img
            src={saree.image}
            alt={saree.type}
          />
        </div>

        <div className="card-content">
          <h2 style={{ color: '#710A14' }}>{saree.type}</h2>
          <hr></hr>
          <h3 style={{ color: '#8b1e3f' }}>Fabric: {saree.fabric}</h3>
          <p style={{ color: '#B18582' }}> {saree.origin}</p>
          {/* <hr />
          <h3>{saree.origin}</h3>
          <p className="color">Color: {saree.color}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
