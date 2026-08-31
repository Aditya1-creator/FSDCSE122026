import React from 'react'
import pic from '../images/h.jpg'

function ICard() {
  let a = 25;
  let name = 'aditya';
  let roll = '224';
  let branch = 'cse';
  let clg = 'abes';

  return (
    <div
    
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      
    >
      {/* <h2 style={{ color: 'red' }}>
        Welcome to React using Vite
      </h2> */}

      {/* <h1>Value of a is = {a}</h1> */}

      <div style={{ border: '5px solid blue', width: '400px' , backgroundColor:'teal'}}>
        <img src={pic} height={100} width={100} style={{borderRadius:'50%'}} ></img>
        <h3>Name is: {name}</h3>
        <h3>Roll no: {roll}</h3>
        <h3>Branch: {branch}</h3>
        <h3>College: {clg}</h3>
        
      </div>
    </div>
  )
}

export default ICard

