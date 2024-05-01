import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const Footer = ({ products }) => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {products.map((product) => (
          <img key={product.id} src={product.imageUrl} alt={product.name} style={{ width: '100px', margin: '0 10px' }} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Copyright © {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        <p>
          <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link> | <Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
