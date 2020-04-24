import React, { Component } from 'react';
import './App.scss';
import './Reset.scss';
import ReviewList from './Pages/ReviewList/ReviewList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ReviewList />
      </div>
    );
  }
}

export default App;
