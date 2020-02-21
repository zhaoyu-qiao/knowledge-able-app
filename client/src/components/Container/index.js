import React from "react";
import "./style.css";

//// This Container componment is used on the About.js page which is the cover page ////

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
