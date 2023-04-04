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
    let object = values[index] = {display: "block"}
    setValues(...values, ...object)
  }
  
  const [values, setValues] = useState({})

  useEffect(() => {
    jsonData.forEach((set, index) => {
      values[index] = {display: "none"}
      setValues(values)
    })
  }, [values]);

  const hideText = (index) => {
    let object = values[index] = {display: "none"}
    setValues(...values, ...object)
  }

  const hideLocationMarker = (index) => {
    marker.remove()
    hideText(index)
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
          console.log(values[index])
          return(
            <Card>
              <p className="pointer" key={index} onMouseEnter={()=>{showLocationMarker(dataSet.coordinates, index)}} onMouseLeave={() =>{hideLocationMarker(index)}}>
                {dataSet.location}
              </p>
              <Card.Body style={values[index]}>
                {dataSet.text}
              </Card.Body>
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