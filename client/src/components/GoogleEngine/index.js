import React from "react";
import "./style.css";

export default function GoogleEngine(props) {
  return (
    <div className="google">
      <script
        async
        src="https://cse.google.com/cse.js?cx=013302808669620956042:x66xgf9gejf"
      ></script>
      <h2 style={{ textAlign: "center" }}>Search For More Information Here:</h2>
      <div className="gcse-search" id="google-search"></div>
    </div>
  );
}
