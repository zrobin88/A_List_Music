import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBtn from "../components/SearchBtn"

function AList() {
    return (
      <div>
       
        <Hero backgroundImage="http://www.carlswebgraphics.com/backgrounds/music-notes-1280.jpg">
          <h1>Your A-List of Musicians</h1>
          <h2>Get in contact and start jamming!</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
             
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
          
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default AList;
  