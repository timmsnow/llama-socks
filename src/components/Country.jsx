import React, { useState, useEffect, useMemo } from 'react';
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
  const [currencyData, setCurrencyData] = useState([])
  const MY_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_KEY;
  const CURRENCY_KEY = process.env.REACT_APP_CURRENCY_TOKEN;
  const [center, setCenter] = useState([])
  const baseCurrencies = useMemo(() => {
    return {
      "Botswana": "BWP",
      "Egypt": "EGP",
      "Kenya": "KES",
      "Namibia": "NAD",
      "South Africa": "ZAR",
      "Bolivia": "BOB",
      "Tanzania": "TZS",
      "Ecuador": "USD",
      "Peru": "PEN",
      "Italy": "EUR",
      "Malta": "EUR",
      "Cambodia": "KHR",
      "Indonesia": "IDR",
      "Japan": "JPY",
      "Malaysia": "MYR",
      "Nepal": "NPR",
      "Thailand": "THB",
      "Philippines": "PHP"
    };
  }, []);
  const downCaseCountry = country.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).slice(1)
  
  useEffect(() => {
    const getCoordinates = () => {
      const endpoint = 'mapbox.places';
      const search_text = downCaseCountry.replace(" ", "-");
      fetch(`https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?access_token=${MY_ACCESS_TOKEN}`)
      .then(response => response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        setCenter(res.data['features'][0]['center'])
      }));
    }

    getCoordinates();
  }, [downCaseCountry, MY_ACCESS_TOKEN]);

  useEffect(() => {
    const getCurrencyConversions = () => {
      fetch(`https://v6.exchangerate-api.com/v6/${CURRENCY_KEY}/latest/${baseCurrencies[country]}`)
        .then(response => response.json())
        .then(data => setCurrencyData(data.conversion_rates))
        .catch(error => console.error(error));
    }

    getCurrencyConversions();
  }, [baseCurrencies, country, CURRENCY_KEY]);
 
  let[introduction, setIntro] = useState("");

  
  useEffect(() => {
    async function fetchHtml() {
      setIntro(await (await fetch(`../../documents/countries/${country}/${intro}`)).text());
    }
  
    async function fetchInfoData() {
      setInfoData(await (await fetch(`../../json/info/${downCaseCountry}.json`)).json());
    }
  
    async function fetchMoveData() {
      setMoveData(await (await fetch(`../../json/move/${downCaseCountry}.json`)).json());
    }
  
    async function fetchBudgetData() {
      setBudgetData(await (await fetch(`../../json/budget/${downCaseCountry}.json`)).json());
    }
  
    async function fetchSleepData() {
      setSleepData(await (await fetch(`../../json/sleep/${downCaseCountry}.json`)).json());
    }
  
    async function fetchSafetyData() {
      setSafetyData(await (await fetch(`../../json/safety/${downCaseCountry}.json`)).json());
    }
    fetchHtml();
    fetchInfoData();
    fetchMoveData();
    fetchBudgetData();
    fetchSleepData();
    fetchSafetyData();
  }, [country, intro, downCaseCountry]);

  return (
    <div className="country-background">
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
        <Tab eventKey="explore" title="Top 5">
          <Explore country={country.match(/[A-Z][a-z]+/g).join(' ')} />
        </Tab>
        <Tab eventKey="other_highlights" title="Other Highlights">
        {center.length > 0 && <Highlights country={downCaseCountry} center={center}/>}
        </Tab>
        <Tab eventKey="info" title="Info">
          {infoData && <Info country={country.match(/[A-Z][a-z]+/g).join(' ')} data={infoData} currencyData={currencyData} baseCurrencies={baseCurrencies}/>}
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