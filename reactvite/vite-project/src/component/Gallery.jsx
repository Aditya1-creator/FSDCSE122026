import React from 'react'
import ICard from './ICard'

function Gallery() {
  return (
    <div style={{border:'2px solid red',display:'flex'}}>
      <ICard name="Rahul kumar" roll="2345" college="abes" branch="cse"/>
      <ICard name="aditya" roll="2346" college="nit" branch="aiml"/>
      <ICard name="kumar" roll="2347" college="iiit" branch="ds"/>
      <ICard name="ram" roll="2348" college="iit" branch="mech"/>
    </div>
  )
}

export default Gallery
