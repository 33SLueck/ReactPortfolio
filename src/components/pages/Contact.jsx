import { useEffect, useState } from "react";
import React from "react";

export const Contact = () => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    // Lade die JSON-Datei
    const basePath = process.env.REACT_APP_BASE_URL || "";
    fetch(`${basePath}/contact.json`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) => console.error("Fehler beim Laden der Daten:", error));
  }, []);
  return (
    <div id="contact">
       <h2>Contact</h2>
      <div className="content">
       
        <div className="contact_wrapper">
          {contact.map((profile) => (
            <div className="adressHolder" key={profile.id}>
              <h3>{profile.name}</h3>
              <div>
                <p>{profile.adress}</p>
                <p>
                  {profile.zip} {profile.city}
                </p>
                <a href={"mailto:" + profile.email}>{profile.email}</a>
                <p>{profile.phone}</p>
              </div>
            </div>
          ))}  
        </div>
        <div className="contact_form">
            <form action="#" method="#" encType="multipart/form-data">
              <ul className="form_wrapper">
                <li className="form_row">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </li>
                <li className="form_row">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </li>
                <li className="form_row vertical">
                  <textarea
                    className="textarea_form"
                    rows="3"
                    cols="10"
                    type="text"
                    id="your_messagen"
                  />
                </li>
                <li className="form_row">
                  <button type="submit">Submit</button>
                </li>
              </ul>
            </form>
          </div>
      </div>
    </div>
  );
};
