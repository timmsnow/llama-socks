import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import Top5 from './Top5.jsx';
import Top5Content from './Top5Content.jsx';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_KEY

const Explore = (props) => {
  const { country } = props
  const defaultLat = -22.32
  const defaultLng = 24.68
  const [locationKey, setLocationKey] = useState(0)
  const [jsonData, setJsonData] = useState([]);
  
  // map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(defaultLng);
  const [lat, setLat] = useState(defaultLat);
  const [zoom, setZoom] = useState(3);
  let[marker, setMarker] = useState({});
  
  async function fetchJson() {
    const json = (await (await fetch(`../../json/highlights/${country}.json`)).json());
    setJsonData(Object.values(json))
  }
  
  useEffect(() => {
    fetchJson();
  }, []);
  
  const handleClick = (e) => {
    setLocationKey(e.target.id)
  }

  const showLocationMarker = (coordinates) => {
    const locationCoordinates = Object.values(coordinates)
    const marker = new mapboxgl.Marker()
      .setLngLat(locationCoordinates)

    setMarker(marker)
    marker.addTo(map.current);
  }

  const hideLocationMarker = () => {
    marker.remove()
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
  }, [lng, zoom]);

  return (
    <div>
      <div>
        <Container className="body-container">
          <Row className="center">
            <Col sm="3">
              <Top5 country={country} handleClick={handleClick}/> :
              <h3 className="center">
                Other Highlights
              </h3>
                { jsonData.map(dataSet => {
                  return(
                    <p onMouseEnter={()=>{showLocationMarker(dataSet.coordinates)}} onMouseLeave={() =>{hideLocationMarker()}}>
                      {dataSet.location}
                    </p>
                  )
                })}
            </Col>
            <Col sm="9">
                <div ref={mapContainer} className="map-container" />
                <Top5Content country={country} locationKey={locationKey} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Explore;