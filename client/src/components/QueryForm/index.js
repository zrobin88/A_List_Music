import React, { Component } from "react";
import "./style.css";

const QueryForm = ({ handleInputChange }) => {
  return (

    <form className="text-light" id="queryForm">

      {/*Instrument Input */}
      <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="instrument-input" name="instrument" onChange={handleInputChange}>
          <option>Select an Instrument</option>
          <option>Vocals</option>
          <option>Guitar</option>
          <option>Drums</option>
          <option>Bass</option>
          <option>Piano/Keyboard</option>
          <option>Electronic/Sampling/Beats</option>
          <option>Wind Instruments</option>
          <option>Classical Strings</option>
        </select>
      </div>
      {/*Style Input */}
      <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="style-input" name="style" onChange={handleInputChange}>
          <option>Select a Style</option>
          <option>Modern Rock</option>
          <option>Metal</option>
          <option>Extreme Metal</option>
          <option>Hard Rock</option>
          <option>Classic Rock</option>
          <option>Punk Rock</option>
          <option>Hip Hop</option>
          <option>EDM</option>
          <option>Jazz</option>
          <option>Industrial</option>
          <option>Hardcore</option>
          <option>Classical</option>
          <option>Gospel</option>
          <option>Pop</option>
          <option>Country</option>
        </select>
      </div>

      {/*Gender Input */}
      <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="gender-input" name="gender" onChange={handleInputChange}>
          <option>Select a Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>

        </select>
      </div>
      {/*Location Input */}
      <div class="form-group">
        <label for="exampleInputEmail1"></label>
        <input type="text" class="form-control"  id="location-input"aria-describedby="emailHelp"onChange={handleInputChange} placeholder="Enter a City and State"/>
       
      </div>
   
      </form>
      );
   };
  
export default QueryForm;