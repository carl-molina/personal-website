import React from "react";
import "./Projects.css";
import joblyGif from "../public/joblyGif.gif";
import pixlyGif from "../public/pixlyGif.gif";
import plantGif from "../public/plantAppGif.gif";

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
                <a
                    href="https://carlmolina-jobly.onrender.com/"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2>
                        JOBLY 👩🏽‍💼
                    </h2>
                </a>
                <img src={joblyGif} className="Projects-gif" />
                <p>Job board where users can sign up, browse companies,
                    and apply to jobs. Companies can post new jobs. Protects
                    routes on unauthorized users. Manages React state. Backend
                    authentication using jsonschema and JWT.
                </p>
                <p>
                    <ul>
                        <li>Frontend:
                            <ul>
                                <li>React, React Router, Fetch API</li>
                            </ul>
                        </li>
                        <li>Backend:
                            <ul>
                                <li>Express, PostGreSQL</li>
                            </ul>
                        </li>
                    </ul>
                </p>
            </div>
            <div className="Projects-container">
                <a href="https://carl-molina-pixly.onrender.com/"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2>
                        PIXLY 📷
                    </h2>
                </a>
                <img src={pixlyGif} className="Projects-gif" />
                <p>Image site that lets users upload images, view other images,
                    search EXIF data, and view a photo's EXIF data.
                    Uses AWS S3 to store and retrieve image files. Additional
                    tech: Python, Flask, Jinja, SQLAlchemy, JS,
                    Pillow.
                </p>
            </div>
            <div className="Projects-container">
                <a href="https://carl-molina-plant-app.onrender.com/"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2>
                        Plant App 🌱
                    </h2>
                </a>
                <img src={plantGif} className="Projects-gif" />
                <p>Plant search site that lets users search plants, view care
                    details, and bookmark individual plants. Additional tech:
                    Perenual API, Flask, Jinja, SQLAlchemy, JS, jQuery, Axios,
                    WTForm, Flask Session, Bcrypt. This project was originally
                    built in Dec 2023.
                </p>
            </div>
        </div>
    );
}

export default Projects;
