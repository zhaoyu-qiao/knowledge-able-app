import React, { Component } from "react";
import "./sytle.css";

const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
const result = 5;

const baseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const appendix = `&maxResults=${result}&key=${YOUTUBE_API}`;
// let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.query}&maxResults=${result}&key=${API}`;

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultyt: [],
      query: ""
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    let temp = e.target.value;
    console.log(temp);
    this.setState({ query: temp });
    fetch("/youtube/" + temp)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        const resultyt = responseJson.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      });
  }

  render() {
    console.log(this.state.resultyt);

    return (
      <div className="ytbutton">
        <button
          className="btn btn-info"
          onClick={this.clicked}
          value="dyslexia"
        >
          {" "}
          Get YouTube Dyslexia Videos
        </button>
        <button
          className="btn btn-info"
          onClick={this.clicked}
          value="dyscalculia"
        >
          {" "}
          Get YouTube Dyscalculia Videos
        </button>
        <button
          className="btn btn-info"
          onClick={this.clicked}
          value="dysgraphia"
        >
          {" "}
          Get YouTube Dysgraphia Videos
        </button>
        <button
          className="btn btn-info"
          onClick={this.clicked}
          value="auditory processing deficit"
        >
          {" "}
          Get YouTube Auditory Processing Deficit Videos
        </button>
        <button
          className="btn btn-info"
          onClick={this.clicked}
          value="visual processing deficit"
        >
          {" "}
          Get YouTube Visual Processing Deficit Videos
        </button>
        <button className="btn btn-info" onClick={this.clicked} value="adhd">
          {" "}
          Get YouTube A.D.H.D Videos
        </button>
        {this.state.resultyt.map((link, i) => {
          console.log(link);
          var frame = (
            <div key={i} className="youtube">
              <iframe
                width="560"
                height="315"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
          return frame;
        })}

        {this.frame}
      </div>
    );
  }
}

export default Youtube;
