import React from "react";
import "./style.css";
import greenMatrix from "../../video/greenMatrix.mp4";
import colorLights from "../../video/Colorful Lights.mp4";
import geetar from "../../video/geetar.mp4";
import blueLight from "../../video/blueLight.mp4";
import record from "../../video/record.mp4";
import neon from "../../video/Neon - 21368.mp4";
import dj from"../../video/dj.mp4";
import rc from"../../video/rc.mp4.mp4";
import fender from "../../video/fender.mp4";
import tape from "../../video/tape.mp4";
import tt from "../../video/Turntable - 10857.mp4"

let videoArr = [greenMatrix, colorLights, geetar ,dj, tape, tt, rc, fender, blueLight, neon, record];
let video = videoArr[Math.floor(Math.random()*videoArr.length)];

function AlistHeader(props) {
    return (
      <div className=" text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
     
        { <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"id="video">
        <source src={video} type="video/mp4"></source>
      
      </video> }
     
          
          
         
        {props.children}
      </div>
    );
  }
  
  export default AlistHeader;
  