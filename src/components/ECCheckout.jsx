import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ECCheckout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Checkout</h1>
      <p>This is the checkout page.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ECCheckout;
