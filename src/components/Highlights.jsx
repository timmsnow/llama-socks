import React, { useState, useEffect, useRef } from 'react';
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
  
  const showLocationMarker = (coordinates, index) => {
    const locationCoordinates = Object.values(coordinates)
    const marker = new mapboxgl.Marker()
    .setLngLat(locationCoordinates)
    
    setMarker(marker)
    marker.addTo(map);
    let object = values
    object[index] = {display: "block"}
    setValues(object)
  }
  
  const [values, setValues] = useState({})

  useEffect(() => {
    if (jsonData.length > 0) {
      jsonData.forEach((set, index) => {
        values[index] = {display: "none"}
        setValues(values)
      })
    }
  }, []);

  const hideText = (index) => {
    let object = values
    object[index] = {display: "none"}
    setValues(object)
  }

  const hideLocationMarker = (index) => {
    marker.remove()
    hideText(index)
  }

  const handleMarker = (map) => {
    setMap(map)
  }

  return (
    <Container>
    <h3 className="center mb-5 mt-5">
      Other Highlights
    </h3>
    <Row className="body-container">
    <Col sm="7">
        { jsonData.map((dataSet, index) => {
          return(
            <Card key={"card_"+ index} className="pointer" onMouseEnter={()=>{showLocationMarker(dataSet.coordinates, index)}} onMouseLeave={() =>{hideLocationMarker(index)}}>
              <h3 className="mt-3 mb-3">
                {dataSet.location}
              </h3>
              <Card.Body style={values[index]}>
                {dataSet.text}
              </Card.Body>
            </Card>
          )
        })}
    </Col>
    <Col sm="5">
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