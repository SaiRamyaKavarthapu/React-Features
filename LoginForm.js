import React, {useState} from 'react';


function LoginForm() {
  
  return (
<form>
    <div className="form-inner">
    <h2>login</h2>
    <div className="form-group">
        <label hrmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        

    </div>

    <div className="form-group">
        <label hrmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        

    </div>

    <div className="form-group">
        <label hrmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        

    </div>

    </div>
    
</form>
  );
}

export default LoginForm;
