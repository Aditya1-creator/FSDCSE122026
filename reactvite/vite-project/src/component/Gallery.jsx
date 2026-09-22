import React from 'react'
import ICard from './ICard'

function Gallery() {
const student = [{
    pic: '',
    name: "rahul kumar",
    roll: '38884',
    branch: 'cse',
    college: 'abes'
},
{
    pic: '',
    name: "ram kumar",
    roll: '3886',
    branch: 'ai',
    college: 'abes'
}]
  return (
    <div style={{border:'2px solid red',display:'flex'}}>
      {/* <ICard name="Rohit kumar" roll="2345" college="abes" branch="cse"/>
      <ICard name="aditya" roll="2346" college="nit" branch="aiml"/>
      <ICard name="kumar" roll="2347" college="iiit" branch="ds"/>
      <ICard name="ram" roll="2348" college="iit" branch="mech"/> */}
      {/* <ICard data={student}/> */}

      {
        student.map((ele)=>(
            <div>
                <ICard data={ele}/>
                </div>
        ))
      }
    </div>
  )
}

export default Gallery
