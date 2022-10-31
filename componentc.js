import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { UserContext } from "./App";

const ComponentC = () => {
    
    return (
        <div>
            <UserContext.Consumer>
                {value =><div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC;