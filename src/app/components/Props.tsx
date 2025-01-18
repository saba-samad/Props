import { time } from 'console'
import React from 'react'


function Props({name,fatherName,roolNo,time}:{name:string ,fatherName:string,roolNo:any,time:string }) {
  
  return (
    <>
     {/* <h1> {name + " " + fatherName + " " + roolNo}</h1> */}


      <h1> {` ${name} ${fatherName} ${roolNo} ${time}`}</h1>
      
         </>
  )
}

export default Props
