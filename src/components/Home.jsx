import React, { useState } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { IMAGES } from '../images/index.js';
import Continents from './Continents.jsx';

const Home = () => {
  const [showBanner, setShowBanner] = useState(true)

  const hideBanner = () => {
    setShowBanner(false)
  }
  return (
    <div>
      {
      showBanner ?
        <img src={IMAGES["LlamaSocksBanner"]} className="App-log" alt="banner" onClick={hideBanner}/> :

                <Continents />
      }
    {/* <Container fluid className="basic-container">
          <Row className="center">
            <Col lg="8">
              <Card>
                <Card.Title className="center padding-top">Llama Socks</Card.Title>
                <Card.Body className="margin">
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
    </div>
  );
}

export default Home;