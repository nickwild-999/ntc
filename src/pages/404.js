import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';


const fourWrapper = styled.div`
padding-top:200px;
`;


const NotFoundPage = () => (
  <Layout>
    <fourWrapper>
      <h1>404 NOT FOUND</h1>
      <p>Alas dear heart. That page doesn&#39;t exist... Ohhh! the sadness.</p>
    </fourWrapper>
  </Layout>
);

export default NotFoundPage;
