import React, { useEffect, useState } from 'react'
import profilePicture from '../../assets/me.JPG';
export const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
      // Lade die JSON-Datei
      const basePath = process.env.REACT_APP_BASE_URL || ''; 
      fetch(`${basePath}/test.json`)  // Achte darauf, den richtigen Pfad zu verwenden
        .then((response) => response.json())
        .then((data) => setArticles(data))
        .catch((error) => console.error('Fehler beim Laden der Daten:', error));
    }, []);
  
  return (
    <div id="home" className="headline">
       <div className="wrapper"> 
       <h1>Sven Lück</h1>
        <img src={profilePicture} alt="Sven Lück" className="rounded"/>
       </div>
       
       {articles.map((article) => (
         <div className='content' key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            </div>
        ))}
        </div>

   
  )
}
