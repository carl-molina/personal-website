import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";

/** RoutesList: list of routes for personal website.
 *
 *  Props: none
 *  State: none
 *
 *  App -> RoutesList -> { Projects, Contact }
*/

function RoutesList(): JSX.Element {

  return (
    <div className="RoutesList">
      <Routes>
        <>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}


export default RoutesList;
