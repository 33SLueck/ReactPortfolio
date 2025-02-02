import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import ScrollButton from "./components/ScrollButton";
import { TopNav } from "./components/TopNav";
import { Home, About, Contact, Services } from "./components/pages";
import { BrowserRouter } from "react-router-dom";
import ReactScrollObserver from "./components/ReactScrollObserver";

function App() {

  const [visibilityStatus, setVisibilityStatus] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setVisibilityStatus(isVisible);
    console.log("handleVisibilitychange");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />

      
          <ReactScrollObserver onVisibilityChange={handleVisibilityChange}>
            <Home />
          </ReactScrollObserver>
        
        <ReactScrollObserver onVisibilityChange={handleVisibilityChange}>
          <Services />
        </ReactScrollObserver>
        <ReactScrollObserver onVisibilityChange={handleVisibilityChange}>
          <About />
        </ReactScrollObserver>
        <ReactScrollObserver onVisibilityChange={handleVisibilityChange}>
          <Contact />
        </ReactScrollObserver>
          <ScrollButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
