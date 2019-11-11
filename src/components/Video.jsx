import React from 'react';

const Videov = ({
  videoSrcURL, videoTitle, videoWidth, ...props
}) => (
  // <iframe
  //   // src="https://player.vimeo.com/video/244384598"
  //   src={videoSrcURL}
  //   title={videoTitle}
  //   // width="640"
  //   // height="800"
  //   width={videoWidth}
  //   height={videoWidth / 1.7}

  //   // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //   // allow="autoplay; fullscreen"
  //   // frameBorder="0"
  //   // webkitallowfullscreen="true"
  //   // mozallowfullscreen="true"
  //   // allowFullScreen
  // />
  <div style={{ height: '600px !important' }}>

    <iframe
      width="80%"
      title={videoTitle}
      height="615"
      src="https://www.youtube.com/embed/v30Ml-9xsRQ"
      allowFullScreen
    />

  </div>
);

export default Videov;
