import React, { useState } from "react";
import Nav from "./Nav";
import HogCollection from "./HogCollection";

import hogs from "../porkers_data";

function App() {
  const [toFilter, setToFilter] = useState(false);
  const [toSort, setToSort] = useState("");

  function handleFilter() {
    setToFilter(!toFilter);
  }

  let filteredHogs = hogs.filter((hog) => {
    if (toFilter === false) {
      return true;
    } else if (hog.greased === true) {
      return true;
    } else {
      return false;
    }
  });

  filteredHogs.sort((hog1, hog2) => {
    if (toSort === "weight") {
      return hog1.weight - hog2.weight;
    } else if (toSort === "name") {
      return hog1.name.localeCompare(hog2.name);
    }
  });

  return (
    <div className="App">
      <Nav />
      <button onClick={handleFilter}>Click me to filter the HOGS</button>
      <br />
      <button onClick={(event) => setToSort("name")}>
        Click me to sort the hogs by NAME
      </button>
      <br />
      <button onClick={(event) => setToSort("weight")}>
        Click me to sort the hogs by WEIGHT
      </button>
      <br />
      <HogCollection hogs={filteredHogs} />
    </div>
  );
}

export default App;
