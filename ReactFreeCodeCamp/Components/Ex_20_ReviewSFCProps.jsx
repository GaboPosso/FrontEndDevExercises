import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line

class Camper extends React.Component {
  constructor(props) {
    super(props);
 };
 render() {
  return (
    <div>
      <p>{this.props.name}</p>
    </div>
  )
 }
}
Camper.defaultProps = {name: 'CamperBot'};
Camper.propTypes = {name: PropTypes.string.isRequired};

const root = document.getElementById('root');
ReactDOM.render(<CampSite/>, root);