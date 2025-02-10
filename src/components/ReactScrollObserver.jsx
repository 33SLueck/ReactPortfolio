import React, { useRef, useEffect, useState } from "react";

const ReactScrollObserver = ({ children, onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
     
        if (entries[0].isIntersecting) {
          console.log("Element ist sichtbar!");
          setIsVisible(true); // Setzt den Zustand auf sichtbar
          onVisibilityChange(true); // Ruft die Callback-Funktion der Elternkomponente auf
        } else {
          console.log("Element ist nicht sichtbar!");
          setIsVisible(false); // Setzt den Zustand auf unsichtbar
          onVisibilityChange(false); // Ruft die Callback-Funktion der Elternkomponente auf
        }
      
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
     threshold: [0.2]
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [onVisibilityChange]);

  return (
    <div
      ref={elementRef}
      style={{
       
        transition: "opacity .5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default ReactScrollObserver;
