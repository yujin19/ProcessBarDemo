import React from "react";
import Filter from "./Filter.js";
import "./styles.css";

const ProcessBar = props => {
  return (
    <div className="processBar">
      <Filter percentage={props.percentage} />
      <div className="percentage">{props.percentage}%</div>
    </div>
  );
};

export default ProcessBar;
