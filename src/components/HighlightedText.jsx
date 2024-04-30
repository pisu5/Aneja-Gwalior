import React from 'react';
import '../css/highlightText.css'; // Import CSS file for styling (create this file)

const HighlightedText = ({ text }) => {
  return (
    <div className="highlighted-text">
      <div className="arrow left-arrow">&#8592;</div>
      <div className="highlighted-content">{text}</div>
      <div className="arrow right-arrow">&#8594;</div>
    </div>
  );
};

export default HighlightedText;
