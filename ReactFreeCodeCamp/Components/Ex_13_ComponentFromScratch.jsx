import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
      <h1>My first React Component!</h1>
      </div>
    );
    }
  }

const root = document.getElementById('challenge-node');
ReactDOM.render(<MyComponent/>, root);
