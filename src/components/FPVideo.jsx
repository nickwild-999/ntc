import React from 'react';
import styled from 'styled-components';
import Video from './Video';

import { useWindowSize } from './hooks/useWindowSize';

const TWAVideoWrapper = styled.div`
  /* background-color: #cb2726; */
  /* height: 400px; */
  /* display: flex;
  flex-direction: column; */
  /* padding-top: 20px; */
  /* padding-bottom: 20px; */
  /* position: relative; */
  /* justify-content: center; */
`;

const TWAVideo = () => {
  const size = useWindowSize();
  return (
    <TWAVideoWrapper>
      {/* <div> */}

      <Video
        // videoSrcURL="https://www.youtube.com/embed/yoO_1FFr56k"
        videoSrcURL="https://player.vimeo.com/video/244384598"
        // videoWidth={size.width < 569 ? 320 : 640}
        videoWidth="800"
      />
      {/* </div> */}
    </TWAVideoWrapper>
  );
};

export default TWAVideo;
