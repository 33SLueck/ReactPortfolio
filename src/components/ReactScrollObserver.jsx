import React, { useRef, useEffect, useState } from 'react';


const ReactScrollObserver = ({ children, onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element ist sichtbar!');
          setIsVisible(true);  // Setzt den Zustand auf sichtbar
          onVisibilityChange(true);  // Ruft die Callback-Funktion der Elternkomponente auf
        } else {
          console.log('Element ist nicht sichtbar!');
          setIsVisible(false); // Setzt den Zustand auf unsichtbar
          onVisibilityChange(false);  // Ruft die Callback-Funktion der Elternkomponente auf
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: [0.2, 0.5],
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
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity .5s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default ReactScrollObserver