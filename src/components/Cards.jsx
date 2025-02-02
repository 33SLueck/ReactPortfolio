import React from 'react'
import Card from './Card'
import projectLogo from '../assets/portfolio.png';

export default function Cards() {
  return (
        <div className='card_wrapper'>
            <Card 
            cardTitle={"Mein Portfolio"} 
            cardCode={"Code"}
            cardTarget={"Visit"}
            imgSrc={projectLogo} imgAlt={"ein Bild"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            <Card cardTitle={"Test"} cardContent={"Das ist ein Test"}/>
            
        </div>
  )
}
