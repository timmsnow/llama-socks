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
  const disabledButtons = [2,4]

  return (
    <div className="app-background">
      <h1 className="center mt-3 mb-3">Where to, lil' llama?</h1>
      <Container fluid className="body-container">
        <Row className="center">
        {continents.map((continent, index) => {
          let spacedContinent = continent.match(/[A-Z][a-z]+/g).join(' ');
          let backgroundImage = {
            backgroundImage: `url(${CONTINENT_BUTTONS[continent + 'Button']})`,
            backgroundSize: 'contain'
          };
          let linkProps = {
            to: `/continent`,
            state: {
              continent: continent,
              countries: countryList[continent]
            }
          };

          // Check if the index should be disabled based on disabledButtons array
          if (disabledButtons.includes(index)) {
            return (
              <Col sm="4" key={"col" + index}>
                <Card className="country-card" key={"card" + index}>
                  <Card.Body className="margin country-button" style={backgroundImage}>
                    <div className="coming-soon">
                      <h2 className="white-title">{spacedContinent}</h2>
                      <span className="diagonal-text">Coming Soon</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          }

          return (
            <Col sm="4" key={"col" + index}>
              <Link
                {...linkProps}
                key={"link" + index}
              >
                <Card className="country-card" key={"card" + index}>
                  <Card.Body className="margin country-button" style={backgroundImage}>
                    <h2 className="white-title">{spacedContinent}</h2>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
      </Container>
    </div>
  );
}

export default Continents;