import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import ScrollButton from "./components/ScrollButton";
import { TopNav } from "./components/TopNav";
import { Home, About, Contact, Services } from "./components/pages";
import { BrowserRouter } from "react-router-dom";
import ReactScrollObserver from "./components/ReactScrollObserver";
import Footer from "./components/pages/Footer";

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
          <Home />
          <Services />
        <ReactScrollObserver onVisibilityChange={handleVisibilityChange}>
          <About isVisible={visibilityStatus}/>
        </ReactScrollObserver>
          <Contact />
        <ScrollButton />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
