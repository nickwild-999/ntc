import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import casting from '../images/hero/Casting.svg';
import isourthing from '../images/hero/IsOurThing.svg';

const MainHero = () => {
  const [isToggled, setToggle] = useState(true);

  const { x } = useSpring({
    x: isToggled ? 0 : -90,
  });

  return (
    <div className="mainhero-wrapper">
      <div className="mainhero-inner">
        <animated.div style={{
          transform: x.interpolate(x => `rotateX(${x}deg)`),
          delay: '2000',
        }}
        >
          <img
            src={casting}
            alt="Nicci Topping Casting - Casting Is Our Thing"
          />
        </animated.div>
        <img
          src={isourthing}
          alt="Nicci Topping Casting - Casting Is Our Thing"
        />
      </div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>

    </div>

  );
};

// const AnimatedCasting = animated.div;


export default MainHero;
