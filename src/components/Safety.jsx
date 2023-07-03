import React, { useState, useEffect } from 'react';
import { Card } from "react-bootstrap";
import SafetySection from './SafetySection.jsx';

const Safety = (props) => {
  const { data } = props
  const filteredData = { ...data };
  const intro = filteredData[Object.keys(filteredData)[0]]
  let lastIndex =  0
  
  if (intro["texts"].length > 0) {
    lastIndex = 0;
  } else {
    delete filteredData[Object.keys(filteredData)[0]];
    lastIndex = Object.keys(filteredData).length - 1;
  }
  const [activeIndex, setActiveIndex] = useState(lastIndex)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []); 
  
  if (isLoading) {
    return <div>Loading...</div>;
  }


  const showLocationMarker = (index) => {
    setActiveIndex(index)
  }

  const hideText = () => {
    setActiveIndex(lastIndex)
  }
  
  const hideLocationMarker = () => {
    setActiveIndex(lastIndex)
  }

  return (
    <>
      {Object.keys(filteredData).map((section, index) => {
            return(
              <Card key={"card_"+ index} className="pointer" onMouseEnter={()=>{showLocationMarker(index)}} onMouseLeave={() =>{hideLocationMarker(index)}}>
                <h2>
                  {section === "1" ? "" : data[section]['header']}
                </h2>
                <Card.Body onClick={hideText} style={{display: index === activeIndex ? "block" : "none"}}>
                  <SafetySection sectionNumber={section} sectionData={data[section]}/>
                </Card.Body>
              </Card>
            )
          })}
      </>
  );
}

export default Safety;