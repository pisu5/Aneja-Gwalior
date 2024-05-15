import React, { useState } from "react";
import "stories-react/dist/index.css";
import Stories from "stories-react";

export default function ImagesStories({ onClose }) {
  const [showStories, setShowStories] = useState(true);

  const handleStoryEnd = () => {
    // When the last story ends, hide the Stories component
    setShowStories(false);
  };

  const stories = [
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4'",
      duration: 5000,
    },
    {
      type: "image",
      duration: 6000,
      url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300",
    },
    {
      duration: 2800,
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {showStories && (
        <Stories
          width="400px"
          height="600px"
          stories={stories}
          onClose={onClose}
          onAllStoriesEnd={handleStoryEnd}
        />
      )}
    </div>
  );
}
