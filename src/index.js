import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ProcessBar from "./ProcessBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 50
    };
  }

  render() {
    return (
      <div className="App">
        <ProcessBar percentage={this.state.percentage} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
