import React from 'react'
import ReactDOM from 'react-dom'

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );

const domNode = document.getElementById("challenge-node"); 
ReactDOM.render(JSX, domNode);