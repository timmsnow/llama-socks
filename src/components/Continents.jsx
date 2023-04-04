import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { CONTINENT_BUTTONS } from '../images/index.js';

const Continents = () => {
  const countryList = {
    "Africa": ["Botswana", "Egypt", "Kenya", "Namibia", "Tanzania", "SouthAfrica"],
    "Asia": ["Cambodia", "Indonesia", "Japan", "Malaysia", "Nepal", "Philippines", "Thailand"],
    "Oceania": ["Australia", "New Zealand"],
    "Europe": ["Italy", "Malta"],
    "NorthAmerica": [],
    "SouthAmerica": ["Bolivia", "Ecuador", "Peru"]
  }
  // "NorthAmerica": ["Belize", "United States", "Mexico"],

  const continents = Object.keys(countryList)

  return (
    <div>
      <h1 className="center">Where to lil llama?</h1>
      <Container fluid className="body-container">
        <Row className="center">
        {continents.map((continent, index) => 
            {
              let spacedContinent = continent.match(/[A-Z][a-z]+/g).join(' ')
              let backgroundImage = { 
              backgroundImage: `url(${CONTINENT_BUTTONS[continent + 'Button']})`,
              backgroundSize: 'contain'
            }
            return (
              <Col sm="4" key={"col" + index}>
                <Link to={`/continent`} key={"link" + index} state={{continent: continent, countries: countryList[continent]}}>
                  <Card className="country-card" key={"card" + index}>
                    <Card.Body className="margin country-button" style={backgroundImage}>
                      <h2 className="white-title">{spacedContinent}</h2>
                    </Card.Body>
                  </Card>
                </Link>
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

export default Continents;