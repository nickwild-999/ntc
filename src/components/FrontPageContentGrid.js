import React from 'react';
import { replaceWithMeasure } from 'rc-mentions/lib/util';
import { fileToObject } from 'antd/lib/upload/utils';

const gridcontainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '300px 300px',
  gridGap: '20px',
};

const item = {
  backgroundColor: 'yellow',
};

const FrontPageContent = () => (


  <div style={gridcontainer}>
    <div style={item}>1</div>
    <div style={item}>2</div>
    <div style={item}>3</div>
    <div style={item}>4</div>
    <div style={item}>5</div>
    <div style={item}>6</div>
    <div style={item}>7</div>
    <div style={item}>8</div>
  </div>
);

export default FrontPageContent;
