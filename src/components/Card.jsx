import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.cardTitle}</h2>
      <img className="card_img" src={props.imgSrc} alt={props.imgAlt} />
      <div className="card_bottom">
        <a href={props.cardCodeUrl}>{props.cardCode}</a>
        <div className="seperator"></div>
        <a href={props.cardTargetUrl}>{props.cardTarget}</a>
      </div>
    </div>
  );
}
