import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import bg from "./images/IMG_1458.jpg";
import fg from "./images/layered-peaks-haikei.svg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Body from "./Body";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> { Navbar, Intro, Body }
 */

function App(): React.ReactElement {

  return (
    <>
      <main>
        <>
          <div className="keyart">
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>
            <Parallax pages={2} className="Parallax-main">
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
                    <a href="#about-me">
                      <button className="css-button-arrow--green">
                        More About Me
                      </button>
                    </a>

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
          </div>
        </>
      </main>
      <section>
      <div className="after-parallax">
        <div className="bottom-component">
          <h1>Test at bottom</h1>
          <Body />
          <h2>Is this at the bottom?</h2>
        </div>
        Í
        {/* Additional content */}

        <footer>
          <h2>Test Footer</h2>
          {/* Your footer content here */}
        </footer>

      </div>
      </section>

    </>
  );
};

export default App;
