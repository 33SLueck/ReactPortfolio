import React, {useEffect, useState} from "react";
import Card from "./Card";
import projectLogo from "../assets/portfolio.png";

export default function Cards() {
  const basePath = process.env.REACT_APP_BASE_URL || "";
   const [projects, setProjects] = useState([]);
   useEffect(() => {
      // Lade die JSON-Datei
      fetch(`${basePath}/projects.json`)
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error("Fehler beim Laden der Daten:", error));
    }, []);
  
  return (
    <div className="card_wrapper">
       {projects.map((project) => (
          <Card key={project.id}
          cardTitle={project.title}
          cardCodeUrl={project.codeUrl}
          cardTargetUrl={project.targetUrl}
          cardCode={"Code"}
          cardTarget={"Visit"}
          imgSrc={`${basePath + project.imgSrc}`}
          imgAlt={project.imgAlt}
        />
      ))}
     
      <Card cardTitle={"Test"} cardContent={"Das ist ein Test"} />
      <Card cardTitle={"Test"} cardContent={"Das ist ein Test"} />
     
    </div>
  );
}
