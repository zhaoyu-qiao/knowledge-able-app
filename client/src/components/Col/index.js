import React from "react";

//// This Col componment is used on the About.js page which is the cover page ////

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default Col;
