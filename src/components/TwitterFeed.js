import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const TwitterFeed = () => (
  <div>
    <TwitterTimelineEmbed
              sourceType="widget"
              screenName="niccitopping"
              options={{ height: 400 }}
              noFooter
              theme="dark"
              noHeader
              noBorders
              transparent
            />
  </div>

);

export default TwitterFeed;
