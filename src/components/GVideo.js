// import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';

// const query = graphql`
//   {
//     vimeo(link: { eq: "https://vimeo.com/244384598" }) {
//       name
//       description
//       duration
//       link
//       aspectRatio
//       width
//       height
//       srcset {
//         ...GatsbyVimeoSrcSet
//       }
//       pictures {
//         uri
//       }
//       user {
//         name
//       }
//     }
//   }
// `;

// const Video = () => {
//   const { vimeo } = useStaticQuery(query);
//   return <video src={vimeo.srcset[0].link} controls autoPlay loop />;
// };

// export default Video;
