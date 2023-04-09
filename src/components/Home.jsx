import React, { useState } from 'react';
import { Carousel, Container } from "react-bootstrap";
import { BANNER_CAROUSEL } from '../images/index.js';
import Continents from './Continents.jsx';
import '../Home.css';


const Home = () => {
  const [showBanner, setShowBanner] = useState(true)
  // const bannerImages = Object.keys(BANNER_CAROUSEL)

  const hideBanner = () => {
    setShowBanner(false)
  }
  
  const BannerCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_3"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_1"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_2"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_4"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_5"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_6"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={BANNER_CAROUSEL["Banner_7"]} className="d-block w-100" alt={"welcome" +" banner"} onClick={hideBanner}/>
        </Carousel.Item>
      </Carousel>
      
    )
  }
  return (
    <div>
      {
      showBanner ?
      <Container fluid className="home-container">
        <BannerCarousel /> 
      </Container> :
      <Continents />
      }
          {/* <Row className="center">
            <Col lg="8">
              <Card>
                <Card.Title className="center padding-top">Llama Socks</Card.Title>
                <Card.Body className="margin">
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
    </div>
  );
}

export default Home;