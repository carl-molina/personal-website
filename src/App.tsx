import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import bg from "./images/IMG_1458.jpg";
import fg from "./images/layered-peaks-haikei.svg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import Intro from "./Intro";

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
            className="tree-bg"
            offset={0}
            speed={0.5}
            factor={2.5}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="container">
              <img
                className="profile-img col-8 mt-5"
                src="./src/images/CarlMolina_ProfilePhoto4.jpg"
                alt="profile photo"
              />
              <div className="Intro-container col-4 mt-5 ml-5 mr-5">
                <Intro />
                <button className="css-button-arrow--green">
                  More About Me
                </button>
              </div>
            </div>

          </ParallaxLayer>
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
