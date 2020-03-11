import React from "react";
import "./style.css";

function IntroBA(props) {
  return (
    <div>
      <div className="col-md-12">
        <h5 className="text-info text-center">
          What is that orange circle icon with the headphones?
        </h5>
        <hr />
        <br />
        <h6>
          {" "}
          Knowledge-ABLE is using Browsealoud. Click on the icon to expand the
          menu.
        </h6>
        <br />
        <h6>
          {" "}
          Browsealoud is a reading, speech and translation support system.
        </h6>
        <br />
        <h6>
          Browsealoud features:
          <ul>
            <li>
              Text-to-speech with choice of reading speeds and highlighters to
              enhance reading comprehension
            </li>
            <li>
              Translate web pages into 99 languages; speak translated text aloud
              in 40 languages
            </li>
            <li>
              On-screen text magnifier helps users with visual impairments
            </li>
            <li>
              MP3 generator converts text to audio files for offline listening
            </li>
            <li>
              Screen mask blocks on-screen clutter, letting readers focus on
              text being read
            </li>
          </ul>
        </h6>
        <br />
        <a
          href="https://www.youtube.com/watch?v=LH7657-xBPI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center btn btn-info browseAloud-btn1"
        >
          <h6>Browsealoud Overview</h6>
        </a>

        <a
          href="https://www.youtube.com/watch?v=w9uxDRpISUI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center btn btn-info browseAloud-btn2"
        >
          <h6>Browsealoud User Guide</h6>
        </a>
      </div>
    </div>
  );
}

export default IntroBA;
