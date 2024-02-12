import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import bg from "./images/IMG_1458.jpg";
import fg from "./images/layered-peaks-haikei.svg";
import "./App.css";

import Navbar from "./Navbar";
import Intro from "./Intro";
import Body from "./Body";
import Projects from "./Projects";
import Contact from "./Contact";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> { Navbar, Intro, Body }
 */

function App(): React.ReactElement {

  function handleScrollAboutMe() {
    const aboutMe = document.getElementById("about-me");
    aboutMe?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <BrowserRouter>
        <main>
          <>
            <div className="keyart">

              <Navbar />
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
                      <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                      <button
                        className="css-button-arrow--green"
                        onClick={handleScrollAboutMe}
                      >
                        More About Me
                      </button>
                    </div>
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  className="mountains-fg"
                  offset={1}
                  speed={2}
                  factor={1}
                  style={{
                    backgroundImage: `url(${fg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: "repeat"
                  }}
                >
                  <div className="Body-container" id="about-me">
                    <Body />
                  </div>
                </ParallaxLayer>
              </Parallax>
            </div>
          </>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
