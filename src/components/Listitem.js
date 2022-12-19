import React from 'react'
import s from './liste.module.css'
export default function Listitem(props) {
   
  return (   
        
        <div className={s.container}>
               
                <ul>                {
                   props.recomanderList.slice(0,10).map(e=>{
                    return(
                        <li key={Math.random()} onClick={()=>props.click(e)}>
                             <img src={`https://image.tmdb.org/t/p/w300${e.backdrop_path}`} alt="" className={s.img}/>
                <div className={s.title}>
                    {e.name}
                    
                </div>
               
                        </li>
                    )
                   })
                }
               </ul>
                
              
        </div>
  
  )
}


 