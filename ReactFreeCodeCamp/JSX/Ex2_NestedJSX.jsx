import React from "react";
import ReactDOM from 'react-dom'

const JSX =     
        <div>
            <h1>Hi!</h1>
            <p>Hi!</p>
            <ul>
                <li>Hi!</li>
                <li>Hi!</li>
                <li>Hi!</li>
            </ul>
        </div>
   
const rootElement = document.getElementById("root");
ReactDOM.render(JSX, rootElement);