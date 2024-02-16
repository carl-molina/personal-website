import React from "react";
// import "./Projects.css";

/** Projects: presentational component for projects.
 *
 * Props: none
 * State: none
 *
 * App -> RoutesList -> Projects
 */

function Projects(): JSX.Element {

    return (
        <div>
            <h2>
                <a
                    href="https://carlmolina-jobly.onrender.com/"
                    target="_blank"
                    rel="noopener">
                    JOBLY
                </a>
            </h2>
            <h2>
                <a href="https://carl-molina-pixly.onrender.com/"
                    target="_blank"
                    rel="noopener">
                    PIXLY
                </a>
            </h2>
            <h2>Plant App</h2>
        </div>
    );
}

export default Projects;
