import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Map from './Map.jsx';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY

const Highlights = (props) => {
  const { country, center } = props
  const [jsonData, setJsonData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null)
  const snakedCountry = country.replace(" ", "-").toLowerCase()
  
  useEffect(() => {
    async function fetchJson() {
      const json = (await (await fetch(`../../json/highlights/${snakedCountry}.json`)).json());
      setJsonData(Object.values(json))
    }
    fetchJson();
  }, [snakedCountry]);
  
  let[marker, setMarker] = useState({});
  let[map, setMap] = useState({});
  
  const showLocationMarker = (coordinates, index) => {
    const locationCoordinates = Object.values(coordinates)
    const marker = new mapboxgl.Marker()
    .setLngLat(locationCoordinates)
    
    setMarker(marker)
    marker.addTo(map);
    setActiveIndex(index)
  }

  const hideText = () => {
    setActiveIndex(null)
  }
  
  const hideLocationMarker = (index) => {
    marker.remove()
    setActiveIndex(null)
  }

  const handleMarker = (map) => {
    setMap(map)
  }

  const mapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mapContainer = mapRef.current;
      const containerRect = mapContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = containerRect.height;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollCenter = scrollTop + windowHeight / 3;
      const containerTop = Math.max(0, scrollCenter - containerHeight);

      mapContainer.style.top = `${containerTop}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className="info-background">
      <Row className="body-container">
      <Col sm="7">
          { jsonData.map((dataSet, index) => {
            return(
              <Card key={"card_"+ index} className="pointer safety-card" onMouseEnter={()=>{showLocationMarker(dataSet.coordinates, index)}} onMouseLeave={() =>{hideLocationMarker(index)}}>
                <h3 className="mt-3 mb-3">
                  {dataSet.location}
                </h3>
                <Card.Body onClick={hideText} style={{display: index === activeIndex ? "block" : "none"}}>
                  {dataSet.text}
                </Card.Body>
              </Card>
            )
          })}
      </Col>
      <Col sm="5">
        <div ref={mapRef} className="map-container">
          <Map center={center} handleMarker={handleMarker} />
        </div>
      </Col> 
      </Row>
    </Container>
  )
}

  export default Highlights;