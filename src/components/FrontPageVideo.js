import React from 'react';
import ReactPlayer from 'react-player';
import Videov from './Video';


const FrontPageVideo = () => (
  <>
    {/* <div
      className="container"
      style={{
        paddingBottom: '20px',
      }}
    > */}
    {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=CCzzaDwUuDk"
          className="react-player-fp"
          width="100%"
          height="100%"
        /> */}
    <Videov />
    {/* Videov works but is too small */}
    {/* </div> */}
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
  </>
);

export default FrontPageVideo;
