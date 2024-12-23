import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ECProductList from './components/ECProductList';
import ECProductDetail from './components/ECProductDetail';
import ECCheckout from './components/ECCheckout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ECProductList />} />
        <Route path="/product/:productId" element={<ECProductDetail />} />
        <Route path="/checkout" element={<ECCheckout />} />
      </Routes>
    </Router>
  );
};

export default App
