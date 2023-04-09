import React, { useState } from 'react';
import { Carousel, Container } from "react-bootstrap";
import InfoSection from './InfoSection.jsx';
import '../Info.css';

const Info = (props) => {
  const { data } = props
  
  const BannerCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <>
    <Container>
      <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
        {Object.keys(data).map(section => {
              return(
                  <Carousel.Item key={"carousel-" + section}>
                    <h2>
                      {data[section]['header']}
                    </h2>
                    <InfoSection sectionNumber={section} sectionData={data[section]}/>
                  </Carousel.Item>
                )
            })}
        </Carousel>
    </Container>
    </>
  );
}
  return (
      <Container fluid className="home-container">
        <BannerCarousel /> 
      </Container> 
  )
}

export default Info;