import React, { useState, useEffect } from "react";
import Form from './Form'
import './App.css';

const App = () => {


   const [gender, setGender]=useState();

 
  
    
  return (
   <div>
    <h1>{gender}</h1>
    <input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)}/>Male
    <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>Female
   </div>
  )
}

export default App;