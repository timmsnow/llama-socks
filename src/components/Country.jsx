import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import { COUNTRY_BANNERS } from '../images/index.js';
import Info from './Info.jsx';
import Highlights from './Highlights.jsx';
import Explore from './Explore.jsx';
import Move from './Move.jsx';
import Budget from './Budget.jsx';
import Sleep from './Sleep.jsx';
import Safety from './Safety.jsx';

const Country = () => {
  const location = useLocation()
  const { country } = location.state
  const banner = country + "Banner"
  const intro = country + "-intro.html"
  const [infoData, setInfoData] = useState(null)
  const [moveData, setMoveData] = useState(null)
  const [budgetData, setBudgetData] = useState(null)
  const [sleepData, setSleepData] = useState(null)
  const [safetyData, setSafetyData] = useState(null)
  const MY_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_KEY;
  const [center, setCenter] = useState([])

  const getCoordinates = () => {
    const endpoint = 'mapbox.places';
    const search_text = country.replace(" ", "-");
    fetch(`https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?access_token=${MY_ACCESS_TOKEN}`)
    .then(response => response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      setCenter(res.data['features'][0]['center'])
    }));
  }

  useEffect(() => {
    getCoordinates();
  }, []);
 
  let[introduction, setIntro] = useState("");

  async function fetchHtml() {
    setIntro(await (await fetch(`../../documents/countries/${country}/${intro}`)).text());
  }

  async function fetchInfoData() {
    setInfoData(await (await fetch(`../../json/info/${country}.json`)).json());
  }

  async function fetchMoveData() {
    setMoveData(await (await fetch(`../../json/move/${country}.json`)).json());
  }

  async function fetchBudgetData() {
    setBudgetData(await (await fetch(`../../json/budget/${country}.json`)).json());
  }

  async function fetchSleepData() {
    setSleepData(await (await fetch(`../../json/sleep/${country}.json`)).json());
  }

  async function fetchSafetyData() {
    setSafetyData(await (await fetch(`../../json/safety/${country}.json`)).json());
  }

  useEffect(() => {
    fetchHtml();
    fetchInfoData();
    fetchMoveData();
    fetchBudgetData();
    fetchSleepData();
    fetchSafetyData();
  }, []);

  return (
    <div>
      <Container fluid className="banner-container">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 country"
        >
        <Tab eventKey="home" title="Home" className="banner-container container">
          <img src={COUNTRY_BANNERS[banner]} className="App-log" alt={country + " banner"}/>
          <div className="intro-container" dangerouslySetInnerHTML={{ __html: introduction }}></div>
        </Tab>
        <Tab eventKey="explore" title="Explore">
          <Explore country={country.match(/[A-Z][a-z]+/g).join(' ')} />
        </Tab>
        <Tab eventKey="other_highlights" title="Other Highlights">
        {center.length > 0 && <Highlights country={country} center={center}/>}
        </Tab>
        <Tab eventKey="info" title="Info">
          {infoData && <Info country={country.match(/[A-Z][a-z]+/g).join(' ')} data={infoData} />}
        </Tab>
        <Tab eventKey="move" title="Move">
          {moveData && 
          <Container>
            <Move country={country.match(/[A-Z][a-z]+/g).join(' ')} data={moveData} />
          </Container>
            }
        </Tab>
        <Tab eventKey="budget" title="Budget">
          {budgetData &&
          <Container>
            <Budget country={country.match(/[A-Z][a-z]+/g).join(' ')} data={budgetData} />
          </Container>
          }
        </Tab>
        <Tab eventKey="sleep" title="Sleep">
          {sleepData && 
          <Container>
            <Sleep country={country.match(/[A-Z][a-z]+/g).join(' ')} data={sleepData} />
          </Container>
          }
        </Tab>
        <Tab eventKey="survive" title="Survive">
          {safetyData && 
          <Container>
            <Safety country={country.match(/[A-Z][a-z]+/g).join(' ')} data={safetyData} />
          </Container>
          }
        </Tab>
      </Tabs>
      </Container>
    </div>
  );
}

export default Country;