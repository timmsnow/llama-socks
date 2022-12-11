import React, { useState, useEffect } from 'react';
import { Card, Container } from "react-bootstrap";
import { TOP5FRONT } from '../images/index.js';



const Top5 = (props) => {
  const { country, handleClick } = props
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
  
  return (
    <div>
      <Container className="basic-container">
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
              <Card className="top5-card" onMouseEnter={()=>{ toggleDarkAndDescription(i)}} onMouseLeave={() =>{ toggleDarkAndDescription(i)}} style={(!hover[i] ? locationImage : locationImageDark)}>
                <div className="top5-content" onClick={handleClick}>
                  {showDescription[i] ? <p id={i} className="top5-post">{jsonData[i].text} </p> : <h2>{jsonData[i].location}</h2>}
                </div>
              </Card>
            </div>
          )
        })
      }
      </Container>
        
    </div>
  );
}

export default Top5;
// var bi = backImages[i]
{/* <Card className="top5-card" onMouseEnter={()=>{ toggleDarkAndDescription(i)}} onMouseLeave={() =>{ toggleDarkAndDescription(i)}}>
{showDescription[i] ? <img src={bi} id={i} onClick={handleClick}/> : <img src={fi} />}
</Card> */}
// const backImages = TOP5BACK[country]