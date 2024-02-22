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
                    href="https://jobly.carlmolina.com/"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2 className="Project-title">
                        Jobly 👩🏽‍💼
                    </h2>
                </a>
                <a href="https://carlmolina-jobly.onrender.com/"
                    target="_blank"
                    rel="noopener"
                >
                    <img src={joblyGif} className="Projects-gif" />
                </a>
                <p>Job board where users can sign up, browse companies,
                    and apply to jobs. Companies can post new jobs. Protects
                    routes on unauthorized users. Manages React state. Backend
                    authentication using jsonschema and JWT. Additional tech:
                    React, React Router, Fetch API, Node.js, Express,
                    PostgreSQL, ElephantSQL, Render.&nbsp;
                    <a
                        href="https://github.com/carl-molina/jobly"
                        target="_blank"
                        rel="noopener"
                    >
                        Github repo.
                    </a>
                </p>
            </div>
            <div className="Projects-container">
                <a href="https://pixly.carlmolina.com/"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2 className="Project-title">
                        Pix.ly 📷
                    </h2>
                </a>
                <a href="https://carl-molina-pixly.onrender.com/"
                    target="_blank"
                    rel="noopener"
                >
                    <img src={pixlyGif} className="Projects-gif" />
                </a>
                <p>Image site that lets users upload images, view other images,
                    search EXIF data, and view a photo's EXIF data.
                    Uses AWS S3 to store and retrieve image files. Additional
                    tech: Python, Flask, Jinja, SQLAlchemy, JS,
                    Pillow.
                    {/* TODO: add Github repo */}
                </p>
            </div>
            <div className="Projects-container">
                <a href="https://plantapp.carlmolina.com/"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2 className="Project-title">
                        Plant App 🌱
                    </h2>
                </a>
                <a href="https://carl-molina-plant-app.onrender.com/"
                    target="_blank"
                    rel="noopener"
                >
                    <img src={plantGif} className="Projects-gif" />
                </a>
                <p>Plant search site that lets users search plants, view care
                    details, and bookmark individual plants. Additional tech:
                    Perenual API, Flask, Jinja, SQLAlchemy, JS, jQuery, Axios,
                    WTForm, Flask Session, Bcrypt, PostgreSQL.
                    {/* TODO: add Github repo */}
                </p>
            </div>
        </div>
    );
}

export default Projects;
