import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { TOP5BANNER } from '../images/index.js';


const Top5Content = (props) => {
  const { country } = props
  const banners = TOP5BANNER[country]
  console.log(banners)
  return (
    <div>
      <Container className="intro-container">
        <img src={banners[1]} />
      </Container>
        
    </div>
  );
}

export default Top5Content;