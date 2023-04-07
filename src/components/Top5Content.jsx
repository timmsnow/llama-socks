import React from 'react';
import { Container } from "react-bootstrap";
import { TOP5BANNER } from '../images/index.js';
import Top5ContentSection from './Top5ContentSection.jsx';

const Top5Content = (props) => {
  const { country, locationKey, jsonData } = props
  const pascalCountry = country.replace(" ", "")
  const banners = TOP5BANNER[pascalCountry]

  return (
    <div className="user-search-box">
      <Container className="list-item pe-5">
        {banners && <img src={banners[locationKey]} /> }
        <div>
          {Object.keys(jsonData[locationKey]).map(section => {
            console.log(section)
            return(
              <div key={"content-" + section}>
                <h2>
                  {section === "1" ? "" : jsonData[locationKey][section]['header']}
                </h2>
                  <Top5ContentSection sectionNumber={section} sectionData={jsonData[locationKey][section]}/>
              </div>
            )
          })}
        </div>
      </Container>
        
    </div>
  );
}

export default Top5Content;