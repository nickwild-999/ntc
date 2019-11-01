import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';


const fourWrapper = styled.div`
padding-top:200px;
`;


const NotFoundPage = () => (
  <Layout>
    <fourWrapper
      style={{ paddingTop: '200px' }}
    >
      <h1>404 NOT FOUND</h1>
      <p>Alas poor webpage, it has shuffled off its mortal code.  Ohhh, the sadness! </p>
    </fourWrapper>
  </Layout>
);

export default NotFoundPage;
