import React from 'react';
import ReactPlayer from 'react-player';
import Videov from './Video';


const FrontPageVideo = () => (
  <>
    <div
      className="container"
      style={{
        paddingBottom: '20px',
      }}
    >
      {/* <ReactPlayer
        url="https://vimeo.com/369889988"
        className="react-player-fp"
      /> */}
      <Videov />
    </div>
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
