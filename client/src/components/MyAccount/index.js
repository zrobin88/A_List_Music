import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API";
import Card from "../Card"


class MyAccount extends Component {

    state = {
        profiles: null,

        profileDetail: null,
    }


   



    render() {
        
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                       <Card />
              </Col>
            </Row>
            
            </Container>




                )
            }
        }
        
export default MyAccount; 