import React , {useState, useEffect, useRef} from "react";

import "./TopNav.css"
import { HashLink as Link } from "react-router-hash-link";


export const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let mobileMenuRef = useRef();
  useEffect(() => {
    let handler =(e) => {
      if (!mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown",handler);
  });
  return (
    <nav ref={mobileMenuRef}>
      <Link smooth to="#home" className="title" onClick={() => {setMenuOpen(false);}}>Home</Link>
      <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}  >
      <li>
          <Link smooth to="#services"  onClick={() => {setMenuOpen(!menuOpen);}}>Projekte</Link>
        </li>
        <li>
        <Link smooth to="#about"  onClick={() => {setMenuOpen(!menuOpen);}}>Skills</Link>
        </li>
        <li>
          <Link smooth to="#contact"  onClick={() => {setMenuOpen(!menuOpen);}}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
