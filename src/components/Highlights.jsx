import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Map from './Map.jsx';
import Highlight from './Highlight.jsx';


mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY


const Highlights = (props) => {
  const { country, center } = props
  const [jsonData, setJsonData] = useState([]);


  async function fetchJson() {
    const json = (await (await fetch(`../../json/highlights/${country}.json`)).json());
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
    <div>

    <Row className="center">
    <Col sm="5">
      <h3 className="center">
        Other Highlights
      </h3>
        { jsonData.map((dataSet, index) => {
          return(
            <p className="pointer" key={index} onMouseEnter={()=>{showLocationMarker(dataSet.coordinates, map.current)}} onMouseLeave={() =>{hideLocationMarker()}}>
              {dataSet.location}
            </p>
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
    </div>
  )
}

  export default Highlights;