import React from "react";
import AlistHeader from "../components/Alist-Header"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css"
import Jumbotron from "../components/Jumbotron"

function About() {
  return (
    <div>
     
      <AlistHeader >
        
      </AlistHeader>
        <Container style={{ marginTop: 30 }}>
          
          <Row>
            <Jumbotron />
     
          </Row>
        

        </Container>
    </div>
      );
    }
    
    export default About;
