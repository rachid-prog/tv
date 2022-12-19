import s from './style.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Tvdetails from './components/Tvdetails';
import Logo from './Logo';
import Listitem from './components/Listitem';
import Recherche from './components/Recherche';
let id = 1402
function App() {
  
  const [populaire,setPopulaire] = useState()
  const [recomanderList, setRecommanderList]= useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=008d54c941e070f8293dda88fa58b0e8&language=fr-FR&page=1')
    .then(data=>setPopulaire(data.data.results[0]))

  },[])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=008d54c941e070f8293dda88fa58b0e8&language=fr-FR&page=1`)
    .then(data=>setRecommanderList(data.data.results))
    
  },[populaire])

  
 
  const onSubmit = (nom)=>{

  }
  return (
    <div className={s.main_container} style={{background:populaire ?`url(https://image.tmdb.org/t/p/original/${populaire.backdrop_path}) center/cover`: "black"}}>
          <div className={s.header}>
            <div className='row'>
              <div className='col-4'>
                <Logo />
              </div>
              <div className='col-sm-12 col-lg-4'>
                <Recherche onSubmit={onSubmit}/>
              </div>
            </div>
          </div>
          <div className={s.tv_show_detail}>{populaire && <Tvdetails tv = {populaire}/>}</div>
          <div className={s.recommentations}>{populaire && <Listitem tv = {populaire}  click={(populaire)=>setPopulaire(populaire)} recomanderList={recomanderList}/>}</div>       
    </div>
  );
}

export default App;
 