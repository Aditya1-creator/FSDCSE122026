import React, { useState } from 'react'
import cat from '../images/h.jpg';

function Imagemanipulation() {

    const[height,setHeight]=useState(200);
    const[width,setWidth]=useState(200);
    const[red,setRed]=useState(20);
    const[green,setGreen]=useState(200);
    const[blue,setBlue]=useState(140);
    const[angle,setAngle]=useState(40)
    const[marginTop,setMarginTop]=useState(0);
    const[marginBottom,setMarginBottom]=useState(0);
    const[marginLeft,setMarginLeft]=useState(0);

function enhanceHeight(){
setHeight(height+10);
}


function enhanceWidth(){
setWidth(width+10);
}
 function changebgcolor(){
  setRed(Math.random()*255)
  setGreen(Math.random()*255)
  setBlue(Math.random()*255)
 }
 function rotateimg(){
  setAngle(angle + 45);
 }
 function moveTop(){
  setMarginTop(marginTop+10);
 }
 function moveBottom(){
  setMarginBottom(marginBottom+10);
 }
 function moveLeft(){
  setMarginLeft(marginLeft+10);
 }
  return (
    <div>
<h2 style={{color:'white',backgroundColor:'brown'}}> Image Manipulation using React</h2>
<div style={{border:'2px solid red',height:'300px', width:'400px'}}>
<img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red},${green},${blue})`,transform:`rotate(${angle}deg)`,marginTop:marginTop,marginBottom:marginBottom,marginLeft:marginLeft}}></img>
<div>
    <h2>Cat height:{height}</h2>
    <h2>Cat width:{width}</h2>
</div>
</div>
<div>

</div>
<button onClick={enhanceHeight}>EnhanceHeight</button>
<button onClick={enhanceWidth}>EnhanceWidth</button>
<button onClick={changebgcolor}>change bg color</button>
<button onClick={rotateimg}>rotate img</button>
<button onClick={moveTop}>margin top</button>
<button onClick={moveBottom}>margin bottom</button>
<button onClick={moveLeft}>margin left</button>

    </div>
  )
}

export default Imagemanipulation