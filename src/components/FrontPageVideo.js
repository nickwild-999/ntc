import React from 'react';
import ReactPlayer from 'react-player';
import Videov from './Video';
import { useWindowSize } from './hooks/useWindowSize';


const FrontPageVideo = () => {
  const size = useWindowSize();
  const videoWidth = size.width < 569 ? 300 : 680;
  const videoSize = { width: `${videoWidth}px`, height: `${Math.round(videoWidth / 1.7)}px` };
  // const videoSize = { width: '350px', height: '200px' };
  return (
    <>
      <div style={{ color: 'blue' }}>
        {size.width}
        {videoWidth}
      </div>
      <div
        className="container"
        style={{
          paddingBottom: '10px',
          textAlign: 'center',
        }}
      >
        <Videov
          vSize={videoSize}
          videoSrcURL="https://player.vimeo.com/video/369889988"
          // videoSrcURL="https://player.vimeo.com/video/244384598"

        />
        <div
          className="front-page-text container"
          style={{ paddingBottom: '100px' }}
        >
          <p>
            We have been casting projects for over 20 years in the UK, Europe and USA.
          </p>
          <p>
            Commercials. Feature Films. TV. Stills. Street Casting
          </p>
          It’s our passion. It’s our thing!
        </div>
      </div>
    </>
  );
};

export default FrontPageVideo;
