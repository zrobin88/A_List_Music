import React from "react";
import "./style.css";

// //image variables 
// const img01 = "https://images.unsplash.com/photo-1471614654469-512ee6a4397a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
// const img02 = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
// const img03 = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
// const img04 = "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
// const img05 = "https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
// const img06 = "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80";
// const img07 = "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
// const img08 = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80";
// const img09 = "https://unsplash.com/photos/wnX-fXzB6Cw";
// const img10 = "https://images.unsplash.com/photo-1508081444780-e2ea2f0b4754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1848&q=80";

// //img array with random picker 
// const imgArr = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10]
// const pickedImage = imgArr[Math.floor(Math.random() * imgArr.length)];
function handleFromSubmit(event){
    window.location.assign("/create-profile")
}

function Jumbotron({ children }) {
  return (



    <div id="carouselExampleControls" className="carousel slide mx-auto" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">


          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Welcome to the A-List!</h1>
    
              <p className="card-text">The A-List is your ultimate tool for finding the right musician for the job. Whether you are a band looking for the right member, a producer looking for a session musician or a venue looking for artists to hit the stage, the A-List has you covered</p>
            </div>
          </div>

        </div>
        <div className="carousel-item">
         
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Step 1: Create a Profile</h1>
    
              <p className="card-text">Create a profile with all of your information such as location, age, instrument, style etc in order to be discovered by others</p>
              <button className="btn btn-primary" id="button" onClick={handleFromSubmit}>Get Started! </button>
            
            </div>
          </div>
        </div>
        <div className="carousel-item">
        
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Step 2: Start Searching!</h1>
    
              <p className="card-text">Once your profile is created, you can then start searching for the right musician. Simply, specify the instrument, style, location and gender and the A-List will render a list of all of the matches to your search.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Step 3: Get in Contact</h1>
    
              <p className="card-text">Your list of search results allows you to view each match's individual profile. Each profile will display the user's contact information. </p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    
  )
}

export default Jumbotron;
