import React from 'react';
import { Container } from "react-bootstrap";
import { TOP5BANNER } from '../images/index.js';


const Top5Content = (props) => {
  const { country, locationKey } = props
  const pascalCountry = country.replace(" ", "")
  const banners = TOP5BANNER[pascalCountry]

  return (
    <div>
      <Container className="">
        {banners && <img src={banners[locationKey]} /> }
      </Container>
        
    </div>
  );
}

export default Top5Content;