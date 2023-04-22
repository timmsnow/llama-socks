import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { TOP5FRONT } from '../images/index.js';
import Map from './Map.jsx';
import mapboxgl from 'mapbox-gl';


const Top5 = (props) => {
  const { country, handleClick, center, locationSelected } = props
  const [showDescription, setShowDescription] = useState({});
  const [hover, setHover] = useState({});
  const top5 = [1,2,3,4,5]
  const snakedCountry = country.replace(" ", "-").toLowerCase()
  const pascalCountry = country.replace(" ", "")
  const frontImages = TOP5FRONT[pascalCountry]
  let[jsonData, setJsonData] = useState("");
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

  async function fetchJson() {
    setJsonData(await (await fetch(`../../json/top5/${snakedCountry}.json`)).json());
  }
  
  useEffect(() => {
    fetchJson();
  }, []);
  
  const toggleDarkAndDescription = (id) => {
    setHover(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
    setShowDescription(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
  }

  const on = (id, coordinates) => {
    toggleDarkAndDescription(id)
    showLocationMarker(coordinates)
  }

  const off = (id) => {
    toggleDarkAndDescription(id)
    hideLocationMarker()
  }

  const handleMarker = (map) => {
    setMap(map)
  }
  
  return (
    <>
      <Container className="center">
        <Row className="mt-3">
        {frontImages && jsonData &&
          top5.map(i => {
            
            let image = frontImages[i]
            let locationImage = {
              backgroundImage : "url(" + image + ")"  
            };
            let locationImageDark = {
              backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + image + ")"  
            };
            
            return(
              <div key={i}>
              <Card className="top5-card" onMouseEnter={()=>{ on(i, jsonData[i].coordinates)}} onMouseLeave={() =>{ off(i)}} style={(!hover[i] ? locationImage : locationImageDark)}>
                <div className="top5-content" onClick={handleClick}>
                  {showDescription[i] ? <p id={i} className="top5-post">{jsonData[i].text} </p> : <h2>{jsonData[i].location}</h2>}
                </div>
              </Card>
            </div>
          )
        })
      }
      </Row>
      { !locationSelected &&
        (<Row>
          <Col xs={12} sm={7} lg={5}>
            <Map center={center} handleMarker={handleMarker}/>
          </Col>
          <Col xs={12} sm={5} lg={7}>
            <h3>
              Llama's Top 5
            </h3>
            <h2>
              {country}
            </h2>
          </Col>
        </Row>)
      }
      </Container>
        
    </>
  );
}

export default Top5;