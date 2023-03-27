import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Top5 from './Top5.jsx';
import Top5Content from './Top5Content.jsx';
import Highlights from './Highlights.jsx';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY

const Explore = (props) => {
  const { country } = props
  const [locationKey, setLocationKey] = useState(0)
  const [locationSelected, setLocationSelected] = useState(false)
  
  // // map
  const [map, setMap] = useState({})
  let[marker, setMarker] = useState({});
  
  const handleClick = (e) => {
    setLocationKey(e.target.id)
    setLocationSelected(true)
  }
  
  const showLocationMarker = (coordinates) => {
    const locationCoordinates = Object.values(coordinates)
    const marker = new mapboxgl.Marker()
    .setLngLat(locationCoordinates)
    
    setMarker(marker)
    marker.addTo(map);
  }
  
  const hideLocationMarker = () => {
    marker.remove()
  }

  return (
    <div>
      <Tabs
      defaultActiveKey="top_5"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
        <Tab eventKey="top_5" title="Llama's Top 5">
          <div>
            <h3>
              Top 5 {country}
            </h3>
            {
              locationSelected ? 
                <Container className="body-container">
                  <Row className="center">
                    <Col sm="3">
                      <Top5 country={country} handleClick={handleClick} setMap={setMap} showLocationMarker={showLocationMarker} hideLocationMarker={hideLocationMarker}/>
                    </Col>
                    <Col sm="9">
                    <Top5Content country={country} locationKey={locationKey} />
                    </Col>
                  </Row>
                </Container>
              :
                <Top5 country={country} handleClick={handleClick} setMap={setMap} showLocationMarker={showLocationMarker} hideLocationMarker={hideLocationMarker} />
            }
          </div>
        </Tab>
        <Tab eventKey="other_highlights" title="Other Highlights">
          <Highlights country={country} showLocationMarker={showLocationMarker} hideLocationMarker={hideLocationMarker} setMap={setMap}/>
        </Tab>
      </Tabs>

    </div>
  );
}

export default Explore;