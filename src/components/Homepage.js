import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import './Homepage.css';
import IMG_0523 from './img/IMG_0523.JPG';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        document.title = "Dock of the Bay Seafood";
    }

    render() {
        return (
        <main id = "mainPage">
            <div id = "landingPage">
                <h3>Welcome to Dock of the Bay Seafood!</h3>
                <img id = "homeImage" src = {IMG_0523}></img>
                <p><strong>Run by Bill Scerbo, Dock of the Bay Seafood has sold fresh-caught crabs out of southern Maryland since 1980. </strong></p>
                <p><strong>For today's prices, visit the "Prices" tab above. Thanks for visiting!</strong></p>
            </div>
        </main>)
    }

}


export default Homepage;