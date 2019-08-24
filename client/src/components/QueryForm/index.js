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
        <input type="text" class="form-control" name='location' id="location-input" aria-describedby="emailHelp" onChange={handleInputChange} placeholder="Enter a City and State" />

      </div>
      {/*State Input */}
      {/* <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="gender-input" name="gender" onChange={handleInputChange}>
          <option>Select a State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>

        </select>
      </div> */}

    </form>
  );
};

export default QueryForm;