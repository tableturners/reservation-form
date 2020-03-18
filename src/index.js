import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

class App extends React.Component {
  state = {
  };

  componentDidMount() {
  }

  

  render() {
    return (
      <div className="make-reservation">
        <h3>
          <span>Make a reservation</span>
        </h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));