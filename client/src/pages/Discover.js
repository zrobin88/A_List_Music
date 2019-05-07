import React, { Component } from "react";
import API from "../utils/API"
import Card from "../components/Card";
import Alert from "../components/Alert";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col"
import Container from "../components/Container";



class Discover extends Component {
  state = {
    query: null,
    artists: []
  }

componentDidMount() {
    // do an api call
    this.loadProfiles();
  }



  loadProfiles = () => {
    API.getProfiles()
      .then(res =>
        this.setState({
          name: "",
          location: "",
          image: "",
          links: "",
          age: 0,
          instrument: "",
          style: "",
          experience: "",
          about: ""
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadProfiles();
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  render() {
    const { errors, instrument, style, location, name,image } = this.state;
    return (
      <div>
        {/*Change this to a list of results. When user clicks a result, a modal will pop up with with the original card that includes buttons for add to a-list or decline*/}
        <Hero backgroundImage="http://www.carlswebgraphics.com/backgrounds/music-notes-1280.jpg">

          <h1 className="text-center coolFont">In Your Area:</h1>
          
         
        <Container style={{ marginTop: 30 }}>
            {/*Put the card here instead of using a seperate component */}
            <Row>
              <Col size="md-12">
                <div className="car d">
                 <ul>
                   <li value ={name}></li>
                   <li value ={location}></li>
                   <li value ={instrument}></li>
                   <li value ={style}></li>
                 </ul>
                </div>

              </Col>
            </Row>

          </Container>

        </Hero>
      </div>
    );
  }
}

export default Discover;
