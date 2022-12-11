import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { TOP5BANNER } from '../images/index.js';


const Top5Content = (props) => {
  const { country, locationKey } = props
  const banners = TOP5BANNER[country]

  return (
    <div>
      <Container className="intro-container">
        {banners && <img src={banners[locationKey]} /> }
      </Container>
        
    </div>
  );
}

export default Top5Content;