import React from "react";
import "./style.css";

//// This Footer componment is used on all of the pages ////

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <span className="bg-info">
        <a
          href="https://github.com/Karlelisa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github mr-2"></i>Karlelisa -
        </a>

        <a
          href="https://github.com/zhaoyu-qiao"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Jo -
        </a>

        <a
          href="https://github.com/daniellekeefe"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Danielle
        </a>
      </span>
    </footer>
  );
}

export default Footer;
