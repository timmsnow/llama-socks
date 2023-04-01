import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Map from './Map.jsx';
import Highlight from './Highlight.jsx';


mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY


const Highlights = (props) => {
  const { country, center } = props
  const [jsonData, setJsonData] = useState([]);
  const snakedCountry = country.replace(" ", "-").toLowerCase()

  async function fetchJson() {
    const json = (await (await fetch(`../../json/highlights/${snakedCountry}.json`)).json());
    setJsonData(Object.values(json))
  }
  
  useEffect(() => {
    fetchJson();
  }, []);

  let[marker, setMarker] = useState({});
  let[map, setMap] = useState({});
  
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

  const handleMarker = (map) => {
    setMap(map)
  }

  return (
    <Container className="body-container">

    <Row className="center">
    <Col sm="5">
      <h3 className="center">
        Other Highlights
      </h3>
        { jsonData.map((dataSet, index) => {
          return(
            <Card>
              <p className="pointer" key={index} onMouseEnter={()=>{showLocationMarker(dataSet.coordinates, map.current)}} onMouseLeave={() =>{hideLocationMarker()}}>
                {dataSet.location}
              </p>
              <p>
                {dataSet.text}
              </p>
            </Card>
          )
        })}
    </Col>
    <Col sm="7">
      <Map center={center} handleMarker={handleMarker}/>
    </Col> 
    </Row>
    <Row>
      <Highlight />
    </Row>
    </Container>
  )
}

  export default Highlights;