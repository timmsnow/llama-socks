import React, { useState } from 'react';
import { Button, Card, Carousel, Container } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SleepSection from './SleepSection.jsx';
import { SLEEP } from '../images/index.js';


const Sleep = (props) => {
  const { data, country } = props
  const dataKeyArray = Object.keys(data);

  const BannerCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const handlePrev = () => {
      if (index === 0) {
        setIndex(dataKeyArray.length - 1);
      } else {
        setIndex(index - 1);
      }
    };
    const handleNext = () => {
      if (index === dataKeyArray.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    let backgroundImage = {
      backgroundImage: `url(${SLEEP[country + 'Sleep']})`,
      backgroundSize: "cover",
      color: "#fff",
      textShadow: "1px 1px 3px black",
    };

    let overlay = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity (0.3) as needed
      mixBlendMode: 'overlay',
    };

  return (
    <>
    <Container className="carousel-container">
      <Carousel interval={null} slide={false} activeIndex={index} onSelect={handleSelect}>
        {dataKeyArray.map(section => {
              return(
                  <Carousel.Item key={"carousel-" + section}>
                    <Card className="no-border" style={backgroundImage}>
                      <div className="carousel-controls mt-5">
                        <Button variant="outline-warning" onClick={handlePrev} style={{zIndex: 1, backgroundColor: "#fff", margin: "0 5px"}}>
                          <BsChevronLeft />
                        </Button>
                        <div style={overlay}></div>
                        <h2>
                          {section === "1" ? "" : data[section]['header']}
                        </h2>
                        <Button variant="outline-warning" onClick={handleNext} style={{zIndex: 1, backgroundColor: "#fff", margin: "5px"}}>
                          <BsChevronRight />
                        </Button>
                      </div>
                      <div className="p-5">
                        <SleepSection sectionNumber={section} sectionData={data[section]}/>
                      </div>
                    </Card>
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

//   return (
//     <>
//       {Object.keys(data).map(section => {
//             return(
//               <div key={"content-" + section}>
//                 <h2>
//                   {section === "1" ? "" : data[section]['header']}
//                 </h2>
//                 <SleepSection sectionNumber={section} sectionData={data[section]}/>
//               </div>
//             )
//           })}
//       </>
//   );
// }

export default Sleep;