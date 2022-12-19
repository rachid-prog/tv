import React from 'react'
import { Search } from 'react-bootstrap-icons'
export default function Recherche({onSubmit}) {
  const submit = (e)=>{
      if(e.key === "Enter" && e.target.value.trim() !== ""){
           onSubmit(e.target.value)
           console.log(e.target.value)
      }
  }
  return (
    <>
    <Search />
    <input type="text"  placeholder='Rechercher votre serie' onKeyUp={(e)=>submit(e)}/>
    </>
  )
}
