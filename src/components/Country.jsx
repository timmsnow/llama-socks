import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { useLocation, Link } from 'react-router-dom'
import { COUNTRY_BANNERS } from '../images/index.js';
import Explore from './Explore.jsx';

const Country = () => {
  const location = useLocation()
  const { country } = location.state
  const banner = country + "Banner"
  const intro = country + "-intro.html"

  let[introduction, setIntro] = useState("");

  async function fetchHtml() {
    setIntro(await (await fetch(`../../documents/countries/${country}/${intro}`)).text());
  }

  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <div>
      <Container fluid className="banner-container">
        <img src={COUNTRY_BANNERS[banner]} className="App-log" alt={country + " banner"}/>
      </Container>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Explore" title="Explore">
        <Explore country={country} />
      </Tab>
      <Tab eventKey="Info" title="Info">
        HI
      </Tab>
      <Tab eventKey="Move" title="Move">
        HI
      </Tab>
      <Tab eventKey="Budget" title="Budget">
        HI
      </Tab>
      <Tab eventKey="Sleep" title="Sleep">
        HI
      </Tab>
      <Tab eventKey="Survive" title="Survive">
        HI
      </Tab>
    </Tabs>
      <div className="intro-container" dangerouslySetInnerHTML={{ __html: introduction }}></div>
    </div>
  );
}

export default Country;