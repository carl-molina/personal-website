import React from "react";
import "./Contact.css";

/** Contact: presentational component for contact info.
 *
 * Props: none
 * State: none
 *
 * App -> RoutesList -> Contact
 */

function Contact() {

    return (
        <>
            <h5 className="Contact-email">carl@carlmolina.com</h5>
            <div className="Contact-icons">
                <h5><a href="https://www.linkedin.com/in/carlmolina/" className="nav-link" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin"></i></a></h5>
                <h5><a href="https://github.com/carl-molina" className="nav-link" target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a></h5>
                <h5><a href="https://medium.com/@carlandrew.molina" className="nav-link" target="_blank" rel="noopener"><i className="fa-brands fa-medium"></i></a></h5>
                <h5><a href="https://twitter.com/carlandmolina" className='nav-link' target="_blank" rel="noopener"><i className="fa-brands fa-x-twitter"></i></a></h5>
                <h5><a href="mailto:carl@carlmolina.com" className="nav-link"><i className="fa-solid fa-envelope"></i></a></h5>
            </div>
        </>

    );
}

export default Contact;
