import React from 'react';
import '../css/CardContainer.css'; // Import your custom CSS file for styling

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-icon card-content">Icon</div>
        <h3 className="card-heading card-content">Free Shipping</h3>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <div className="card-icon card-content">Icon</div>
        <h3 className="card-heading card-content">Hassle Free Returns</h3>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <div className="card-icon card-content">Icon</div>
        <h3 className="card-heading card-content">100% Secure Payments</h3>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <div className="card-icon card-content">Icon</div>
        <h3 className="card-heading card-content">Trusted by thousand Customers Across India</h3>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default CardContainer;
