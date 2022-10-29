import React from 'react'
import ReactDOM from 'react-dom'

const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );

const root = document.getElementById("root");
ReactDOM.render(JSX, root);