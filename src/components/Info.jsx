import React, { useState } from 'react';
import { Button, Card, Carousel, Container } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import InfoSection from './InfoSection.jsx';
import '../Info.css';

const Info = (props) => {
  const { data, currencyData, baseCurrencies, country } = props
  const dataKeyArray = Object.keys(data);
  const currencyHeader = "Currency Conversion Rates"
  const currencySection = {
    "header": currencyHeader,
    "section": [`1 ${baseCurrencies[country]}`, " ", " ", " "],
    "texts": [`${currencyData["USD"]} USD`, `${currencyData["GBP"]} GBP`, `${currencyData["EUR"]} EUR`, `${currencyData["JPY"]} JPY`]
  }

  data[9] = currencySection
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

  return (
    <>
    <Container className="carousel-container">
      <Carousel interval={null} slide={false} activeIndex={index} onSelect={handleSelect}>
        {dataKeyArray.map(section => {
              return(
                  <Carousel.Item key={"carousel-" + section}>
                    <Card className="no-border">
                      <div className="carousel-controls">
                        <Button variant="outline-warning" onClick={handlePrev}>
                          <BsChevronLeft />
                        </Button>
                        <h2>
                          {data[section]['header']}
                        </h2>
                        <Button variant="outline-warning" onClick={handleNext}>
                          <BsChevronRight />
                        </Button>
                      </div>
                      <div className="p-5">
                        <InfoSection sectionNumber={section} sectionData={data[section]}/>
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

export default Info;