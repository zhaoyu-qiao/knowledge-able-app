import React from "react";

//// This Row componment is used on the About.js page which is the cover page ////

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;
