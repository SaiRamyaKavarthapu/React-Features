import React, { useState, useEffect } from "react";
import Test from './test'


const Controlled = () => {


   const [name, setName]=useState('');

   const changeHandler = (e) =>{
    setName(e.target.value);
   }

 
  
    
  return (
   <div>
  <center>name:{name}<br/>
    <input type="text" onChange={changeHandler}/><br/>
    <Test changeHandler={changeHandler} /></center>
   </div>
  )
}

export default Controlled;