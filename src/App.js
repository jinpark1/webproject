import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    console.log('App.js-----', this.props.userData)
    console.log('App.js-----', this.props.userData.email)
    if(this.props.userData.email){
      this.checkSession()
      console.log('app-js---if-statement', this.props.userData)
    }
  }

  checkSession = () => {
    console.log('App.js----user is offline')
    console.log('App.js----this.props.userData', this.props.userData)
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

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps)(App);
