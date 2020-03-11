import React from "react";

function IntroBA(props) {
  return (
    <div>
      <div className="col-md-6 text-center tex-info">
        <h5 className="text-info">
          What is that orange circle icon with the headphones?
        </h5>
        <small> Knowledge-ABLE is using Browsealoud.</small>
        <br />
        <small>
          {" "}
          Browsealoud is a reading, speech and translation support system.
        </small>
        <br />
        <a
          href="https://www.youtube.com/watch?v=LH7657-xBPI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small className="text-primary">Browsealoud Overview</small>
        </a>
        <br />
        <a
          href="https://www.youtube.com/watch?v=w9uxDRpISUI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small className="text-primary">Browsealoud Guide</small>
        </a>
      </div>
    </div>
  );
}

export default IntroBA;
