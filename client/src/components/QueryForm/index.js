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
                                        <option>Alternative Rock</option>
                                        <option>Black Metal</option>
                                        <option>Blues</option>
                                        <option>Classic Rock</option>
                                        <option>Classical</option>
                                        <option>Country</option>
                                        <option>EDM</option>
                                        <option>Extreme Metal</option>
                                        <option>Gospel</option>
                                        <option>Hardcore</option>
                                        <option>Hard Rock</option>
                                        <option>Hip Hop</option>
                                        <option>Industrial</option>
                                        <option>Jazz</option>
                                        <option>K-Pop</option>
                                        <option>Metal</option>
                                        <option>Modern Rock</option>
                                        <option>Pop</option>
                                        <option>Power Metal</option>
                                        <option>Prog Metal</option>
                                        <option>Prog Rock</option>
                                        <option>Punk Rock</option>
                                        <option>R&B</option>
                                        <option>Rockabilly</option>
                                        <option>Singer/Songwriter</option>
                                        <option>Ska</option>
                                        <option>Thrash Metal</option>
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