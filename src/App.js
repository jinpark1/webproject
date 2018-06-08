import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer/>
      </div>
    );
  }
}

export default App;
