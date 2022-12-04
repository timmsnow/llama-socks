import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from 'react-router-dom'
import { COUNTRY_BANNERS } from '../images/index.js';

const Continent = () => {
  const location = useLocation()
  const { country } = location.state
  const banner = country + "Banner"
  
  // let[htmlFileString, setHtmlFileString] = useState("");

  // async function fetchHtml() {
  //   setHtmlFileString(await (await fetch(`../../documents/continents/${continent}.html`)).text());
  // }

  // useEffect(() => {
  //   fetchHtml();
  // }, []);

  // console.log(htmlFileString)
  return (
    <div>
      <Container fluid className="banner-container">
        <img src={COUNTRY_BANNERS[banner]} className="App-log" alt={country + " banner"}/> :
        {/* <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div> */}
        {/* <Row className="center">
        {countries.map((country, index) => 
        {let button = country + "Button"
        return (
          <Col sm="4">
            <Card>
              <Card.Title className="center padding-top">{country}</Card.Title>
              <Card.Body key={index} className="margin">
              <Link to={`/country`} state={{country: country}}>
                <img src={IMAGES[button]} className="continent-picture" alt=""/>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          )
          }
                  )
                }
        </Row> */}
      </Container>
    </div>
  );
}

export default Continent;