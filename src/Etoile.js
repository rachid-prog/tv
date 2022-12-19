import React from 'react'
import {StarFill,Star,StarHalf} from "react-bootstrap-icons"
 
export default function Etoile(props) {  
    const starList = [];
    //Etoile pleinne:
    const plein = Math.floor(props.etoile)
    //Demi etoile
    const demiEtoile = props.etoile - plein >=0.5
    //Etoile vide
     const vide = 5 - plein -(demiEtoile ? 1 :0)
    
     for(let i=0;i<plein;i++){
        starList.push(<StarFill key={Math.random()}/>)
     }
     demiEtoile && starList.push(<StarHalf />)
       for(let i=0;i<vide;i++){
        starList.push(<Star key={Math.random()}/>)
     }
  return (
    <div>
      {starList}
    </div>
  )
}
