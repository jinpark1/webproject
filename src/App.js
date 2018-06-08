import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
