import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ABOUT } from '../images/index.js';
import InstagramFeed from './InstagramFeed.jsx';

const About = () => {
  const images = ABOUT;

  return (
    <>
    <Container>
      <h2 className="home-container">
        hola. hi. salaam. jambo. ciao. kon’nichiwa. and welcome.
      </h2>
      <Container className="about-container">
        <Row className="mb-4">
          <Col sm={6} lg={7}>
            <p>
              HI! I’m Timm! 
              World traveler, modern day explorer, lover of run-on sentences, and writer/creator/founder of Llama Socks, and I’m here to help with all your budget backpacking needs.
            </p>
            <p>
              I caught my first case of itchy feet at the tender age of 18 and embarked on a solo trip to Europe. What I thought would be one solitary year abroad, quickly snow-balled into a lifetime of exploration and an unshakeable conviction to lead a life less ordinary. Suddenly the whole world had presented itself, and for the first time, I was really paying attention.
            </p>
            <p>
              Traveling opened my eyes to the bigger picture, and set me on a path of perpetual discovery. A traveler’s life is one of exploration. An Exploration of the world, and an exploration of ourselves as human beings.
            </p>
          </Col>
          <Col sm={6} lg={5}>
            <img src={images["timmBanaue"]} alt="the website creator"/>
          </Col>
        </Row>
        <Row className="mb-4 mt-4">
          <Col sm={6} lg={5}>
            <img src={images["timmSaxayhuaman"]} alt="the website creator" />
          </Col>
          <Col sm={6} lg={7}>
            <p>
              Time can bend when you’re on the road. Two weeks can feel like five, four months can feel like a year. In this way traveling keeps us young, but fills us with knowledge and experiences.
            </p>
            <p>
              After spending 15+ years on the road, living in and traveling through six continents and over 60 countries, I’ve come to understand the world of intrepid travel and all that it can offer. 
            </p>
            <p>
              My goal is to harness the inspirational power of global travel to help budding would-be nomads to realize their goals, pursue their passions, and push beyond their self-imposed limitations.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={6} lg={7}>
            <p>
              Llama Socks is here to be used as a resource for all the budding travel llama’s out there wanting to sink their little llama teeth into the great Pineapple that is our beloved planet Earth.
            </p>
            <p>
              So pull on a pair a of wooly foot-sweaters and let’s start planning your adventure. Whether it’s shark diving off the coast of Mozambique, eating your way through the night markets of South East Asia, or making friends with the Moai on Rapa Nui, Llama Socks is here to help.
            </p>
            <p>
              Feel free to contact me through my Instagram or you can reach out to me directly via my contact page.
            </p>
            <p>
              Now go treat yourself to something delicious. Like an ice cream, or a mango. Or a mango ice cream.
            </p>
          </Col>
          <Col sm={6} lg={5}>
            <img src={images["timmOnsen"]} alt="the website creator"/>
          </Col>
        </Row>
      </Container>
      <Row className="mb-5">
        <Col lg="6" className="mx-auto instagram">
          <p>Checkout Llama Socks on Instagram</p>
          <InstagramFeed />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default About;