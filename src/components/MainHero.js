import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { Link, scroller } from 'react-scroll';
import styled from 'styled-components';

import casting from '../images/hero/Casting.svg';
import commercials from '../images/hero/Commercials.svg';
import film from '../images/hero/Film.svg';
import isourthing from '../images/hero/IsOurThing.svg';
import DownArrow from '../images/hero/downarrow.svg';


const slides = [
  { id: 0, image: <img src={casting} alt="cast - Nicci Topping Casting - Casting Is Our Thing" /> },
  { id: 1, image: <img src={commercials} alt="Coms - Nicci Topping Casting - Casting Is Our Thing" /> },
  { id: 2, image: <img src={film} alt="Coms - Nicci Topping Casting - Casting Is Our Thing" /> },

];


const DownArrowWrapper = styled(Link)`
        align-self: center;
        color: black;
        cursor: pointer;
        padding-bottom: 30px;
        text-align: center;
`;


const MainHero = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: {
      opacity: 0,
      x: -90,
    },
    enter: {
      opacity: 1,
      x: 0,

    },
    leave: {
      opacity: 0,
      x: -90,
    },
    config: config.wobbly,
  });

  useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 3200), []);
  return (
    <div className="mainhero-wrapper">
      <div className="mainhero-inner">
        {transitions.map(({ item, props, key }) => (
          <animated.div
            style={{
              ...props,
              transform: props.x.interpolate(x => `rotateX(${x}deg)`),
            }}
            key={key}
          >
            <div style={{
              width: '100%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',

            }}
            >
              {item.image}
            </div>
          </animated.div>
        ))}
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <img
          src={isourthing}
          alt="test"
        />
      </div>
      {/* <Link
        activeClass="active"
        to="showreel"
        smooth="true"
        duration={500}
        style={{ alignSelf: 'center' }}
      >
      More
      </Link> */}
      <DownArrowWrapper activeClass="active" to="showreel" smooth="true" duration={500}>
        MORE
        <img
          src={DownArrow}
          alt="Down Arrow"
          style={{ maxWidth: '20%', alignSelf: 'center' }}
        />
      </DownArrowWrapper>
    </div>


  );
};


export default MainHero;
