import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from 'react-router-dom'
import { COUNTRY_BANNERS } from '../images/index.js';

const Country = () => {
  const location = useLocation()
  const { country } = location.state
  const banner = country + "Banner"
  const intro = country + "-intro.html"
  console.log(intro)
  let[htmlFileString, setHtmlFileString] = useState("");

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`../../documents/countries/${country}/${intro}`)).text());
  }

  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <div>
      <Container fluid className="banner-container">
        <img src={COUNTRY_BANNERS[banner]} className="App-log" alt={country + " banner"}/>
      </Container>
        <div className="intro-container" dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default Country;