import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Continent from './components/Continent';
import About from './components/About';
import Continents from './components/Continents';
import Country from './components/Country';

function App() {

  return (
    <div className="App">
      <header className="">
      <Navbar className="nav-bar" /> 
      </header>
      <main>
          <Routes>
            <Route exact path="/" element={< Home/>}></Route>
            <Route exact path="/about" element={< About/>} />
            <Route exact path="/continents" element={< Continents/>} />
            <Route exact path="/continent" element={< Continent/>} />
            <Route exact path="/country" element={< Country/>} />
          </Routes>
        </main>
        <div>
      </div>
    </div>
  );
}

export default App;
