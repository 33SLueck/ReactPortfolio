import React, {useState, useEffect} from 'react';
import './App.css';
import ScrollButton from './components/ScrollButton';
import {TopNav} from './components/TopNav';
import { Home , About, Contact, Services } from './components/pages';
import { BrowserRouter } from 'react-router-dom';

import Data from './components/Data';
function App() {
 
  return (
    <div className="App">  
    <BrowserRouter>
      <TopNav/>
     <Data/>
    
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <ScrollButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
