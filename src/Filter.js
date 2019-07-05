import React from "react";
import "./styles.css";

const Filter = props => {
  return <div className="filter" style={{ width: `${props.percentage}%` }} />;
};
export default Filter;
