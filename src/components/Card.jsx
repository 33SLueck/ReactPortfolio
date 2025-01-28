import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
<h2>{props.cardTitle}</h2>
<img className="card_img" src={props.imgSrc} alt={props.imgAlt}/>
<p className='card_content'>{props.cardContent}</p>
    </div>
  )
}
