import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import './Header.css';
import crabsign from './img/crabsign.png';

  class Header extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          return (
            <header className = "mainHeader">
            <div className="logo">
                <img className = "logoImage" src={crabsign} alt="blue crab"/>
            </div>
            <div className="siteTitle">
                <h1>Welcome to Dock of the Bay Seafood!</h1>
            </div>
            <div className="subheader1">
                <h2>Your Local Source for Fresh Seafood</h2>
            </div>
            <div className="subheader2"></div>
            <nav className="primaryNav">
                <ul> 
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/prices">Prices</Link></li><br id = "break" />
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/pics">Pictures</Link></li>
                </ul>
            </nav>
            
        </header>
          );
      }
  }


  
  export default Header;