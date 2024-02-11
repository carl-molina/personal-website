import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import bg from "./images/IMG_1458.jpg";
import fg from "./images/layered-peaks-haikei.svg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App(): React.ReactElement {

  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
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
      {/* <footer>
        <a href="test.txt" download="test.txt">Test</a>
      </footer> */}
    </>

  );
};

export default App;
