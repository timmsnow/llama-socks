import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import Top5 from './Top5.jsx';
import Top5Content from './Top5Content.jsx';
import Highlights from './Highlights.jsx';

const Explore = (props) => {
  const { country } = props
  const MY_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_KEY;
  const [locationKey, setLocationKey] = useState(0)
  const [locationSelected, setLocationSelected] = useState(false)
  const [center, setCenter] = useState([])
  
  const handleClick = (e) => {
    setLocationKey(e.target.id)
    setLocationSelected(true)
  }
  
  const getCoordinates = () => {
    const endpoint = 'mapbox.places';
    const search_text = country;
    fetch(`https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?access_token=${MY_ACCESS_TOKEN}`)
    .then(response => response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      setCenter(res.data['features'][0]['center'])
    }));
  }

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div>
      <>
        <Tabs
        defaultActiveKey="top_5"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
          <Tab eventKey="top_5" title="Llama's Top 5">
            <div>
              {
                locationSelected ? 
                <Container className="body-container">
                    <Row className="center">
                      <Col sm="3">
                      {center.length > 0 && <Top5 country={country} center={center} handleClick={handleClick} locationSelected={locationSelected}/>}
                      </Col>
                      <Col sm="9">
                        <Top5Content country={country} locationKey={locationKey} />
                      </Col>
                    </Row>
                  </Container>
                :
                <Container>
                  <Row>
                  {center.length > 0 && <Top5 country={country} center={center} handleClick={handleClick} locationSelected={locationSelected}/>}
                  </Row>
                </Container>
              }
            </div>
          </Tab>
          <Tab eventKey="other_highlights" title="Other Highlights">
          {center.length > 0 && <Highlights country={country} center={center}/>}
          </Tab>
        </Tabs>
      </>
    </div>
  );
}

export default Explore;