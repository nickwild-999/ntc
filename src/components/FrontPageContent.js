import React from 'react';

const FrontPageContent = () => (

  <div className="columns is-multiline">
    <div
      className="column is-half-tablet is-one-quarter-desktop"
      style={{ backgroundColor: 'blue' }}
    >
            blue
    </div>
    <div className="column is-half-tablet is-one-quarter-desktop" style={{ backgroundColor: 'red' }}>
            red
    </div>
    <div className="column is-half-tablet is-one-quarter-desktop" style={{ backgroundColor: 'yellow' }}>
            yellow
    </div>
    <div className="column is-half-tablet is-one-quarter-desktop" style={{ backgroundColor: 'green' }}>
            green
    </div>
  </div>
);

export default FrontPageContent;
