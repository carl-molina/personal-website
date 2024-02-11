import React from "react";
import "./App.css";

import bg from "./images/IMG_1458.jpg";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App(): React.ReactElement {

  return (
    <div className="App">
      <main>
        <img src={bg} alt="night-sky" className="bg-image"/>
      </main>
    </div>
  );
};

export default App;
