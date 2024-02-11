import React from "react";
import { BrowserRouter } from "react-router-dom";
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
    <main>
      <BrowserRouter>
      </BrowserRouter>
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
  );
};

export default App;
