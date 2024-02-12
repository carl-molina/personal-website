import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/** Navbar: component for personal website.
 *
 *  Props: none
 *  State: none
 *
 *  App -> Navbar
 */

function Navbar(): JSX.Element {

    return (
        <div className="Navbar">
            <nav>
                <NavLink to="/" className="Navbar-title">Carl Molina</NavLink>
                <ul>
                    <li><a href=".src/resume/CarlMolina_Resume.pdf" download="CarlMolina_Resume.pdf">Resume</a></li>
                    <li><NavLink to="/companies">Projects</NavLink></li>
                    <li><NavLink to="/jobs">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;
