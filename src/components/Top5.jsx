import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import { TOP5FRONT, TOP5BACK } from '../images/index.js';


const Top5 = (props) => {
  const { country } = props
  const [showDescription, setShowDescription] = useState({});
  const [hover, setHover] = useState({});
  const top5 = [1,2,3,4,5]
  const frontImages = TOP5FRONT[country]
  const backImages = TOP5BACK[country]

  const toggleDarkAndDescription = (id) => {
    setHover(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
    setShowDescription(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
  }

  return (
    <div>
      <Container className="basic-container">
        Llama Socks Recommends {country}
        {
             top5.map(i => {
              // var img = i
              // var im = img.split(' ')[0].split(' ').reduce((o,i)=> o[i], (images))
              var fi = frontImages[i]
              var bi = backImages[i]
              // var divImage = {
              //   backgroundImage : "url(" + fi + ")"  
              // };
              // style={divImage}
              // var divImageDark = {
              //   backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + fi + ")"  
              // };
              return(
                <div key={i}>
                  <Card className="top5-card" onMouseEnter={()=>{ toggleDarkAndDescription(i)}} onMouseLeave={() =>{ toggleDarkAndDescription(i)}}>
                     {showDescription[i] ? <img src={bi} /> : <img src={fi} />}
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