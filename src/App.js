import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import './Components/Nav/Nav';
import './App.scss';
import './Reset.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Footer />
      </div>
    );
  }
}

export default App;
