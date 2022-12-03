import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import IMAGES from '../images/index.js';

const Continents = () => {
  const countryList = {"Africa": ["Botswana", "Egypt", "Kenya", "Namibia", "Tanzania", "SouthAfrica"], "Asia": [], "Australia": [], "Europe": [], "NorthAmerica": [], "SouthAmerica": []}
  const continents = Object.keys(countryList)
  return (
    <div>
      <h1 className="center">Where to lil llama?</h1>
      <Container fluid className="basic-container">
        <Row className="center">
        {continents.map((continent, index) => 
          <Col sm="4">
            <Card>
              <Card.Title className="center padding-top">{continent}</Card.Title>
              <Card.Body key={index} className="margin">
                <Link to={`/continent`} state={{continent: continent, countries: countryList[continent]}}>
                  <img src={IMAGES[continent]} className="continent-picture" alt=""/>
                </Link>
              </Card.Body>
            </Card>
          </Col>
                  )
                }
        </Row>
      </Container>
    </div>
  );
}

export default Continents;