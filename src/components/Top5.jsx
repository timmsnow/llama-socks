import React, { useState, useEffect } from 'react';
import { Card, Container, Row } from "react-bootstrap";
import { TOP5FRONT } from '../images/index.js';



const Top5 = (props) => {
  const { country, handleClick, showLocationMarker, hideLocationMarker } = props
  const [showDescription, setShowDescription] = useState({});
  const [hover, setHover] = useState({});
  const top5 = [1,2,3,4,5]
  const frontImages = TOP5FRONT[country]
  
  let[jsonData, setJsonData] = useState("");
  
  async function fetchJson() {
    setJsonData(await (await fetch(`../../json/top5/${country}.json`)).json());
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
  
  return (
    <div>
      <Container className="center">
        <Row>
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
      </Container>
        
    </div>
  );
}

export default Top5;