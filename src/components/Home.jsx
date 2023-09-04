import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Carousel, Container } from "react-bootstrap";
import { BANNER_CAROUSEL } from '../images/index.js';

const Home = () => {
  const BannerCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_3"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_1"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_2"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_4"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_5"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_6"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_7"]} className="d-block w-100" alt={"welcome banner"}/>
        </Carousel.Item>
      </Carousel>
      
    )
  }
  return (
      <Container fluid className="home-container hide-carousel-controls">
        <Link to={`/continents`}>
          <BannerCarousel /> 
        </Link>
      </Container>
  );
}

export default Home;