import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
//import Button from 'react-bootstrap/lib/Button';

class About extends Component {

  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          
          <h2>Welcome to React</h2>
        </div>*/}
        <Navbar/>
        <p className="App-intro">
           <div className="App">            
            </div>          
          <hr/>
        </p>
        <Jumbotron/>
        xxxxx
        <Footer/>
      </div>
    );
  }

}
export default Navbar;
