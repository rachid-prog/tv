import React from "react";
import Etoile from "../Etoile";
import s from '../style.module.css'

export default function Tvdetails(props) {    
  return (
    <div>
      <div className={s.title}>{props.tv.name}</div>
      <div className={s.rating}>{props.tv.vote_average / 2}
      {props.tv.vote_average / 2 &&<Etoile  etoile={props.tv.vote_average / 2}/>}
      </div>
      <div className={s.overview}>{props.tv.overview}</div>
    </div>
  );
}
