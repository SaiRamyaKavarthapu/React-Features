import React, { useState, useEffect } from "react";
import Form1 from './Form1'

const Childtoparent = () => {


   const getData= (data) =>{
console.log("coming",data)
   }

 
  
    
  return (
   <div>
    <Form1 onSubmit={getData}/>
   </div>
  )
}

export default Childtoparent;