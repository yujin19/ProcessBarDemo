import React, { Component } from "react";
import ProcessBar from "./ProcessBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 60
    };
  }
  render() {
    return (
      <div>
        <ProcessBar percentage={this.state.percentage} />
      </div>
    );
  }
}

export default App;
