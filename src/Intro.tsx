import React from "react";
import "./Intro.css";

/** Intro: presentational component for bio.
 *
 * Props: none
 * State: none
 *
 * App -> Intro
 */

function Intro(): JSX.Element {

    return (
        <>
            <h1>Software Engineer</h1>
            <h3>San Jose, CA</h3>
            <p>Former Field Op Specialist with calibration and sensor health
                experience in the autonomous vehicle industry.<br></br>
                <br></br>
                Now full-stack software developer building React-TypeScript apps, automating tests,
                and&nbsp;<i>
                <a
                    href="https://medium.com/@carlandrew.molina
                    /ordering-a-burritozilla-in-the-middle-of-a-coding-bootcamp
                    -15dadf1eca22"
                    target="_blank"
                    rel="noopener"
                    className="Medium-post"
                >
                    deciding whether or not to eat a Burritozilla for the
                    umpteenth time.
                </a></i>
            </p>
        </>
    )
}

export default Intro;
