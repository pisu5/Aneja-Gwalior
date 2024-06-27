import React, { useState } from "react";
import "../css/header2.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Logo section */}
        <div className="logo">
          <img src="../Aneja-1.png" alt="Aneja mall" />
        </div>

        {/* Search bar section */}
        <div className="search">
          <input type="text" placeholder="What are you looking for" />
        </div>

        {/* Icons section */}
        <div className="icons">
          {/* Display search icon only on mobile */}
          <span className="icon search-icon">🔍</span>
          <span className="icon user-icon">👤</span>
          <span className="icon wishlist-icon">❤️</span>
          <span className="icon cart-icon">
            🛒<span className="cart-count">0</span>
          </span>
        </div>
      </div>

      {/* Navigation links */}
    <nav className={`header-bottom ${menuOpen ? "open" : ""}`}>
      <Link to="/sale" className="sale">SALE</Link>
      <Link to="/new-arrivals">New Arrivals</Link>
      <Link to="/sarees">Sarees</Link>
      <Link to="/suits">Suits</Link>
      <Link to="/kurtis">Kurtis</Link>
      <Link to="/co-ord-set">Co-Ord Set</Link>
      <Link to="/unstitched-suits">Unstitched Suits</Link>
      <Link to="/lehengas">Lehengas</Link>
      <Link to="/gowns">Gowns</Link>
      <Link to="/wedding-collection">Wedding Collection</Link>
      <Link to="/bestsellers">Bestsellers</Link>
    </nav>
    </header>
  );
};

export default Header;
