import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import data from '../src/MockData/Formdata'


const Registration = () => {
    const [values, setValues] = useState({
        username:'',
        password:'',
        confirmpassword:'',
        firstName: '',
        lastName: '',
        email: '',
    });
    const [Data, setData] =useState([]);
    const {username, password, confirmpassword } = values  ;

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)

    const handleOnChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(values);
        data.user.push({...values});
        console.log("Data",data.user)
      
    }

    return (
        <div>

            <form class='register-form' onSubmit={handleSubmit}>
            <div class="mb-3 mt-3">
                    <label for="firstName">First Name:</label>
                    <input type="text" class="form-control" id="firstName" value={values.firstName}
                        onChange={handleOnChange} placeholder="Enter email" name="firstName" />
                </div>
                <div class="mb-3 mt-3">
                    <label for="lastname">Last Name:</label>
                    <input type="text" class="form-control" id="lastname" value={values.lastName}
                        onChange={handleOnChange} placeholder="Enter Last Name" name="lastName" />
                </div>
                <div class="mb-3 mt-3">
                    <label for="email">Email:</label>
                    <input type="text" class="form-control" id="email" value={values.email}
                        onChange={handleOnChange} placeholder="Enter Email" name="email" />
                </div>
            <div class="mb-3 mt-3">
                    <label for="username">User Name:</label>
                    <input type="text" class="form-control" id="username" value={values.username}
                        onChange={handleOnChange} placeholder="Enter username" name="username" />
                </div>
                <div class="mb-3 mt-3">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" value={values.password}
                        onChange={handleOnChange} placeholder="Enter Password" name="password" />
                </div>
                <div class="mb-3 mt-3">
                    <label for="confirmpassword">Confirm Password:</label>
                    <input type="confirmpassword" class="form-control" id="confirmpassword" value={values.confirmpassword}
                        onChange={handleOnChange} placeholder="Enter confirmpassword" name="confirmpassword" />
                </div>
                {password !==confirmpassword ? <p style={{color:"red"}}>passwords are not matching</p> :null}
              

                <button type="submit" class="btn btn-primary">Register</button>



            </form >

        </div>
    )
}

export default Registration;