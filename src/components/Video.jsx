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
  <div>

    <iframe
      src="https://player.vimeo.com/video/369889988"
      frameBorder="0"
      width="1024"
      height="800"
      title={videoTitle}
      // style={{ height: '800px!important' }}
    />

  </div>
);

export default Videov;
