import React from "react";
import "./style.css";
//this is tied to the query page
function Hero(props) {
  return (
    <div className="jumbotron hero text-center"   style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    
      {props.children}
    </div>
  );
}

export default Hero;
