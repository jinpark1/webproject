import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateUserData } from './ducks/reducer';
import { withRouter } from 'react-router';
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Ubuntu" />

class App extends Component {

  componentDidMount(){
    if(!this.props.userData.email){
      this.checkSession()
    }
  }

  checkSession = () => {
    const getSession = async () => {
      const session = await axios.get('/api/checkSession');
      if(session.data.user){
        this.props.updateUserData(session.data.user);
      }
    }
    getSession()
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

const mapDispatchToProps = {
  updateUserData
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
