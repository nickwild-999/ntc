import React from 'react';
import styled from 'styled-components';

const DirectorsWrapper = styled.div`
background-color:yellow;
margin: 70px
font-size: 1.5rem
:hover
  {background-color:red}
`;


export default function Directors() {
  const directorlist = ['Gus Van Sant', 'Keith McCarthy', 'Jacques Salmon', 'Peter Lydon', 'Lisa Gunning', 'Shane Meadows', 'Michael Cumming', 'Rob Chiu', 'Nick Wild', 'Thomas James', 'Odilon Rocha', 'Kim Gehring', 'Betsan Morris Evans', 'Kavi Raz', 'Paul Tanter', 'Ryan Bonder', 'Daniel Wolfe', 'Tom King', 'Peter Cattaneo', 'Tony Kaye', 'Paul Hunter', 'Chris Morris', 'Yousaf Ali Khan', 'Matt Winn', 'Julian Kronfli', 'Phil Taylor', 'Tony Durston', 'Emma Farrell', 'Mick Davies', 'Martin Brieley', 'Dahlan Masselle', 'Ian Single', 'Phil Kerr', 'Bluey', 'Steve Wright', 'Richard Laxton', 'Pat Holden', 'Matt Carter', 'Steve Bendelack', 'Mark Brozel', 'Michael Baldwin', 'Michael Winterbottom', 'WHO', 'Darren Bolton'];
  return (
    <>
      <div>test</div>
      <DirectorsWrapper>
        {directorlist.map(director => (
          <>
            <span className="directors-name">
              {director}
            </span>
            <span>
            &bull;
            </span>
          </>
        )) }
      </DirectorsWrapper>
    </>
  );
}
