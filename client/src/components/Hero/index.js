import React from "react";
import "./style.css";


//// This Hero componment is used on the About.js page which is the cover page ////

function Hero(props) {
  return (

    <div className="jumbotron text-primary">
      <div className="container text-primary">
        {/* <h1>Encourage Learning</h1> */}
      </div>
      {props.children}
    </div>


    // <div className="hero text-center" >
    //   {props.children}
    // </div>



  );
}

export default Hero;
