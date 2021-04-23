import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


import './Footer.css';

  class Footer extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          return (
            <footer className = "mainFooter">
            <nav className="footerNav">
                <span className="footerItem">
                    <span>4 Friendship Rd, Friendship MD 20758 </span>
                </span>
                <span className="footerItem">
                    |
                </span>
                <span className="footerItem">
                    <span>240-610-5997</span>
                </span>
                <span className="footerItem">
                    |
                </span>
                <span className="footerItem">
                    <span>bilcrab@gmail.com</span>
                </span>
            </nav>
          </footer>
          )
         ;
      }
  }


  export default Footer;