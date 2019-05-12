import React from "react";
import "./style.css"; 

function Jumbotron({ children }) {
  return (
    <div className="jumbotron" id="jumbotron">
    <h1 className="display-4">What is the A-List?</h1>
    <p className="lead">The A-List is a 21st century approach to finding the right musician for the job. Simply create a profile and search for musicians based on Instrument, Style, Location and Gender. The A-list displays results in a list, in order to save you time, where you can quickly view each result's profile and contact who is best-fit for the job.</p>
    <br>
    </br>
    Whether you are a band looking for the right member, a producer looking for the right session musician or a venue looking for the right musician to grace the stage, the A-List has you covered! Find the right musician for the job always!
   

    <p className="lead">
    <br></br>
      <a className="btn btn-primary btn-lg" href="/create-profile" role="button">Get Started</a>
    </p>
  </div>
  )
}

export default Jumbotron;
