import React from "react";

import { format } from "date-fns"; 

import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

function App() {

  return (
    <div className="App">
      <h1>Now</h1>

      <p>In React...</p>

      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;