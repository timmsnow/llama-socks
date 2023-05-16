import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from 'react-router-dom'
import { CONTINENT_BANNERS, COUNTRY_BUTTONS } from '../images/index.js';

const Continent = () => {
  const location = useLocation()
  const { continent, countries } = location.state
  const banner = continent + "Banner"
  
  let[htmlFileString, setHtmlFileString] = useState("");

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`../../documents/continents/${continent}.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  });
  
  return (
      <Container fluid className="banner-container container">
        <div className="banner">
          <img src={CONTINENT_BANNERS[banner]} className="App-log fade-out" alt={continent + " banner"}/>
        </div>
        <div className="content">

        <Container className="continents-container">
        <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>

        <Row className="center">
        {countries.map((country, index) => 
        {
          let button = country.replace(" ", "") + "Button"
          let spacedCountry = country.match(/[A-Z][a-z]+/g).join(' ')
          let backgroundImage = { 
            backgroundImage: `url(${COUNTRY_BUTTONS[button]})`,
            backgroundSize: 'contain'
          }
          return (
            <Col sm="4" key={"col" + index}>
            <Link to={`/country`} state={{country: country}}>
              <Card className="country-card">
                <Card.Body key={index} className="margin country-button" style={backgroundImage}>
                <h2 className="white-title">{spacedCountry}</h2>
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
      </Container>
  );
}

export default Continent;