import React from "react";
import "./App.css";

import bg from "./images/IMG_1458.jpg";
import fg from "./images/layered-peaks-haikei.svg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App(): React.ReactElement {

  return (
    <div className="App">
      <main>
        <Parallax pages={2}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            factor={2.5}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer
            offset={1}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `url(${fg})`,
              backgroundSize: 'cover',
            }}
          >
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
};

export default App;


// old way:
// <Parallax pages={2}>
// <ParallaxLayer speed={1}>
//   <h1>Test 1 layer</h1>
//   <img src={bg} alt="night-sky" className="bg-image"/>
// </ParallaxLayer>
// <ParallaxLayer offset={1} speed={0.5}>
//   <h1>Test 2 Layer</h1>
//   <img src={fg} alt="layered-peaks" className="fg-image"/>
// </ParallaxLayer>
// </Parallax>