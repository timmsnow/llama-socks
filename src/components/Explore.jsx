import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Top5 from './Top5.jsx';
import Top5Content from './Top5Content.jsx';
import Highlights from './Highlights.jsx';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY

const Explore = (props) => {
  const { country } = props
  const [locationKey, setLocationKey] = useState(0)
  const [locationSelected, setLocationSelected] = useState(false)
  const [highLightsOnly, sethighlightsOnly] = useState(false)
  
  // // map
  const [map, setMap] = useState({})
  let[marker, setMarker] = useState({});
  
  const handleClick = (e) => {
    setLocationKey(e.target.id)
    setLocationSelected(true)
    sethighlightsOnly(false)
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

  const hideTop5 = () => {
    setLocationSelected(false)
    sethighlightsOnly(true)
  }

  const showDefaultView = () => {
    setLocationSelected(false)
    sethighlightsOnly(false)
  }

  return (
    <div>
      {
        !highLightsOnly ? 
        <div>
          {
            locationSelected ? "" :
            <div>
              <h3>
                Top 5 {country}
              </h3>
              <Top5 country={country} handleClick={handleClick} showLocationMarker={showLocationMarker} hideLocationMarker={hideLocationMarker} />
            </div>
          }
        </div> : ""
      }
      <div>
        <Container className="body-container">
            {
              locationSelected ?
              <Row className="center">
                <Col sm="3">
                  <Button className="margin" variant="warning" size="sm" onClick={()=> {hideTop5()}}>
                    view other highlights
                  </Button>
                  <Top5 country={country} handleClick={handleClick} showLocationMarker={showLocationMarker} hideLocationMarker={hideLocationMarker}/>
                </Col>
                <Col sm="9">
                <Top5Content country={country} locationKey={locationKey} />
                </Col>
              </Row> :
              <Highlights country={country} showDefaultView={showDefaultView} showLocationMarker={showLocationMarker} hideLocationMarker={hideLocationMarker} setMap={setMap}/>
              }
        </Container>
      </div>
    </div>
  );
}

export default Explore;