import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import IMAGES from '../images/index.js';

const Continent = () => {
  const location = useLocation()
  const { continent, countries } = location.state
  const banner = continent + "Banner"
  
  return (
    <div>
      <Container fluid className="banner-container">
        <img src={IMAGES[banner]} className="App-log" alt="banner"/> :
        <Row className="center">
        {countries.map((country, index) => 
        {let button = country + "Button"
        return (
          <Col sm="4">
            <Card>
              <Card.Title className="center padding-top">{country}</Card.Title>
              <Card.Body key={index} className="margin">
                <img src={IMAGES[button]} className="continent-picture" alt=""/>
              </Card.Body>
            </Card>
          </Col>
          )
          }
                  )
                }
        </Row>
      </Container>
    </div>
  );
}

export default Continent;