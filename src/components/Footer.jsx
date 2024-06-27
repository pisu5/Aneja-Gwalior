import React from 'react';
import "../css/Footer.css";
import { FaCreditCard, FaPaypal, FaCcVisa, FaCcMastercard, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaTrophy } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section about">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="footer__section achievements">
                        <h4>Achievements</h4>
                        <p><FaTrophy /> Over 1 million customers worldwide</p>
                        <p><FaTrophy /> Trusted by leading brands</p>
                        <p><FaTrophy /> Award-winning customer service</p>
                    </div>
                    <div className="footer__section payment">
                        <h4>Payment Methods</h4>
                        <div className="payment-icons">
                            <FaCreditCard />
                            <FaPaypal />
                            <FaCcVisa />
                            <FaCcMastercard />
                        </div>
                    </div>
                    <div className="footer__section links">
                        <h4>Quick Links</h4>
                        <ul className="quick-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer__section categories">
                        <h4>Product Categories</h4>
                        <ul className="product-categories">
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Home & Garden</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">Toys</a></li>
                        </ul>
                    </div>
                    <div className="footer__section subscribe">
                        <h4>Subscribe</h4>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="footer__section contact">
                        <h4>Contact Us</h4>
                        <p><FaMapMarkerAlt /> Aneja Mall, More Bazaar, opp. Gandhi Market, near ICICI BANK, Bhao Ka Bazar, Lashkar, Gwalior, Madhya Pradesh 474001</p>
                        <p><FaPhone /> +91 9111183331</p>
                        <p><FaEnvelope />Anejasarees@gmail.com</p>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="mailto:info@company.com"><FaEnvelope /></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com/anejamall?igsh=MWo2dW1lZTBha3IxYw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
