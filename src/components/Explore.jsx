import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import { COUNTRY_BANNERS } from '../images/index.js';
import Top5 from './Top5.jsx';
import Top5Content from './Top5Content.jsx';

const Explore = (props) => {
  const { country } = props

  return (
    <div>
      <Container className="body-container">
        EXPLORE {country}
        <Container>
        <Row className="center">
          <Col sm="3">
            <Top5 country={country}/>
          </Col>
          <Col sm="9">
            <Top5Content country={country}/>
          </Col>
        </Row>

        </Container>

      </Container>
        
    </div>
  );
}

export default Explore;