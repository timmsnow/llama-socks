import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { IMAGES } from '../images/index.js';

const Continents = () => {
  const countryList = {
    "Africa": ["Botswana", "Egypt", "Kenya", "Namibia", "Tanzania", "SouthAfrica"],
    "Asia": ["Cambodia", "Indonesia", "Japan", "Malaysia", "Nepal", "Philippines", "Thailand"],
    "Oceania": ["Australia", "New Zealand"],
    "Europe": ["Italy", "Malta"],
    "NorthAmerica": ["United States", "Mexico"],
    "SouthAmerica": ["Bolivia", "Ecuador", "Galapagos", "Peru"]
  }

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
              <Card.Body className="margin">
                <Link to={`/continent`} state={{continent: continent, countries: countryList[continent]}}>
                  <img key={index} src={IMAGES[continent]} className="continent-picture" alt={continent + "button"}/>
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