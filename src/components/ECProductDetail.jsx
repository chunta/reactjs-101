import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ECProductService } from './ECProductService';

const ECProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await ECProductService.getProductById(Number(productId));
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => navigate('/checkout')}>Go to Checkout</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ECProductDetail;
