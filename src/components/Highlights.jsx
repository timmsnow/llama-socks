import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Highlight from './Highlight.jsx';


mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY


const Highlights = (props) => {
  const { country, showDefaultView, showLocationMarker, hideLocationMarker, setMap } = props
  const defaultLat = -22.32
  const defaultLng = 24.68
  // map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(defaultLng);
  const [lat, setLat] = useState(defaultLat);
  const [zoom, setZoom] = useState(3.5);
  const [jsonData, setJsonData] = useState([]);


  async function fetchJson() {
    const json = (await (await fetch(`../../json/highlights/${country}.json`)).json());
    setJsonData(Object.values(json))
  }
  
  useEffect(() => {
    fetchJson();
  }, []);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });

    setMap(map.current)
  }, [lng]);

  return (
    <div>

    <Row className="center">
    <Col sm="5">
      <h3 className="center">
        Other Highlights
      </h3>
        { jsonData.map(dataSet => {
          return(
            <p className="pointer" onMouseEnter={()=>{showLocationMarker(dataSet.coordinates, map.current)}} onMouseLeave={() =>{hideLocationMarker()}}>
              {dataSet.location}
            </p>
          )
        })}
      <Button variant="warning" size="sm" onClick={()=> {showDefaultView()}}>
        view top 5
      </Button>
    </Col>
    <Col sm="7">
      <div ref={mapContainer} className="map-container" />
    </Col> 
    </Row>
    <Row>
      <Highlight />
    </Row>
    </div>
  )
}

  export default Highlights;