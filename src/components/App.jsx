import React from "react";
import ClassComponent from "./ClassComponents";
import FunctionalComponents from "./FunctionalComponents";

class App extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent />
        <FunctionalComponents />
      </div>
    );
  }
}

export default App;
