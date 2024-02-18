import React from "react";
import "./Projects.css";

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
            <div className="Projects-container">
                <h2>
                    <a
                        href="https://carlmolina-jobly.onrender.com/"
                        target="_blank"
                        rel="noopener"
                        className="Projects-project">
                        JOBLY
                    </a>
                </h2>
            </div>
            <div className="Projects-container">
                <h2>
                    <a href="https://carl-molina-pixly.onrender.com/"
                        target="_blank"
                        rel="noopener"
                        className="Projects-project">
                        PIXLY
                    </a>
                </h2>
            </div>
            <div className="Projects-container">
                <h2>
                    <a href="https://carl-molina-plant-app.onrender.com/"
                        target="_blank"
                        rel="noopener"
                        className="Projects-project">
                        Plant App
                    </a>
                </h2>
            </div>
        </div>
    );
}

export default Projects;
