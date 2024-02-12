import React from "react";
import "./Intro.css";

/** Intro: presentational component for bio.
 *
 * Props: none
 * State: none
 *
 * App -> Intro
 */

function Intro() {

    return (
        <>
            <h1>Software Engineer</h1>
            <h3>San Jose, CA</h3>
            <p>Former Field Op Specialist with calibration and sensor health
                experience in the autonomous vehicles industry.<br></br>
                <br></br>
                Now full-stack developer building React apps, automating tests,
                and&nbsp;<i>
                <a
                    href="https://medium.com/@carlandrew.molina
                    /ordering-a-burritozilla-in-the-middle-of-a-coding-bootcamp
                    -15dadf1eca22"
                    target="_blank"
                    rel="noopener"
                >
                    deciding whether or not to eat a Burritozilla for the
                    umpteenth time.
                </a></i>
            </p>
        </>
    )
}

export default Intro;
