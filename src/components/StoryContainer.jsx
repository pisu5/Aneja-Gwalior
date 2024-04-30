import React from 'react';
import StoryItems from './StoryItems';

const StoryContainer = ({ stories }) => {
  return (
    <div className="story-container">
      {stories.map((story, index) => (
        <StoryItems key={index} story={story} />
      ))}
    </div>
  );
};

export default StoryContainer;
