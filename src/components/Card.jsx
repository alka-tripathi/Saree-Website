import React from 'react';
import './Card.css';
import { Button } from '@mui/material';

function Card({ saree, addToCart }) {
  return (
    <div>
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
            <h3>₹{saree.price}</h3>
            <hr></hr>
            <h3 style={{ color: '#8b1e3f' }}>Fabric: {saree.fabric}</h3>
            <p style={{ color: '#B18582' }}> {saree.origin}</p>
            <Button
              size="small"
              variant="contained"
              onClick={() => addToCart(saree)}
              sx={{
                backgroundColor: '#8F3C45',
                textTransform: 'none',
                borderRadius: 2,
                px: 2,
                marginTop: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#B18582',
                  color: '#731a33',
                },
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
