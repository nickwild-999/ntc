import React from 'react';


const Videov = ({
  videoSrcURL, videoTitle, vSize, ...props
}) => (
  <div>
    <iframe
      style={size}
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      allow="autoplay; fullscreen"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  </div>
);

export default Videov;
