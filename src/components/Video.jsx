import React from 'react';


const Videov = ({
  videoSrcURL, videoTitle, vWidth, vSize, ...props
}) => (
  <iframe
        // width={vWidth}
        // height={Math.round(vWidth / 1.7)}
    width="100%"
    height="100%"
    src={videoSrcURL}
    title={videoTitle}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    allow="autoplay; fullscreen"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
  />
);
export default Videov;
