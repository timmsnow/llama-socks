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
    <div>
      <Container fluid className="banner-container">
        <img src={CONTINENT_BANNERS[banner]} className="App-log" alt={continent + " banner"}/> :
        <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
        <Row className="center">
        {countries.map((country, index) => 
        {
          let button = country.replace(" ", "") + "Button"
          let spacedCountry = country.match(/[A-Z][a-z]+/g).join(' ')
        return (
          <Col sm="4">
            <Card>
              <Card.Title className="center padding-top">{spacedCountry}</Card.Title>
              <Card.Body key={index} className="margin">
              <Link to={`/country`} state={{country: country}}>
                <img src={COUNTRY_BUTTONS[button]} className="continent-picture" alt={country + " button"}/>
                </Link>
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