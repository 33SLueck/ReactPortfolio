
import './App.css';
import React ,{ useRef } from 'react';
import {TopNav} from './components/TopNav';
import { Home , About, Contact, Services } from './components/pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">  
    <BrowserRouter>
      <TopNav/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
