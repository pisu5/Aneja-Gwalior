import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../css/Footer.css"; // Import your custom CSS file for styling 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="footer-logo">
            <img src="https://docs.google.com/document/d/1xk-Jyl5rXaQBdXQWcoM4r2aKixW9056wZrL0oMOgp2E/edit?usp=sharing" alt="Aneja mall" />


            </div>
            <p className="footer-description">Discover the latest trends in girls fashion wear.</p>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Follow Us</h5>
            <div className="footer-social">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-contact">123 Aneja Mall ,Gwalior(M.P) INDIA</p>
            <p className="footer-contact">Email: info@example.com</p>
            <p className="footer-contact">Phone: +91 9165880140</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6}>
              <p className="footer-copy">&copy; {new Date().getFullYear()} Aneja Mall. All rights reserved.</p>
            </Col>
            <Col md={6}>
              <ul className="footer-policy-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
