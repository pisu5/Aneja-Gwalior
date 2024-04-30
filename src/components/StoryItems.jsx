import React from 'react';

const StoryItems = ({ story }) => {
  return (
    <div className="story-item">
      <img src={story.imageUrl} alt="Story" />
      {/* Add timer or progress bar for 30 seconds */}
    </div>
  );
};

export default StoryItems;
