import React from 'react';
import AddtoCart from './AddtoCart';
import './AddtoCart.css';

function Cart({ sarees, onRemove }) {
  const totalPrice = sarees.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#8b1e3f',
        }}
      >
        Cart Items
      </h1>

      {sarees.length === 0 ? (
        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: '#8b1e3f',
          }}
        >
          Your cart is empty!
        </p>
      ) : (
        <>
          <div className="card-container">
            {sarees.map((item) => (
              <AddtoCart
                key={item.id}
                saree={item}
                onRemove={onRemove}
              />
            ))}
          </div>

          <h2
            style={{
              textAlign: 'center',
              marginTop: '20px',
              color: '#710A14',
            }}
          >
            Total: ₹{totalPrice}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
