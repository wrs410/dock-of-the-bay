import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import './Prices.css';
import IMG_0523 from './img/IMG_0523.JPG';

class Prices extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        document.title = "Dock of the Bay Prices";
    }

    render() {
        return (
        <main id = "pricePage">
            <h3 id = "priceTitle">Prices for Today</h3>
            <div className = "priceGrid">
                <div className = "males1">
                    <div className = "priceArea">
                        <h3>Jumbo Males</h3>
                        <p>$/dozen</p>
                        <p>$/half bushel</p>
                        <p>$/bushel</p>
                    </div>
                </div>
                <div className = "males2">
                    <div className = "priceArea">
                        <h3>#1 Males</h3>
                        <p>$/dozen</p>
                        <p>$/half bushel</p>
                        <p>$/bushel</p>                        
                    </div>
                </div>
                <div className = "males3">
                    <div className = "priceArea">
                        <h3>#2 Males</h3>
                        <p>$/dozen</p>
                        <p>$/half bushel</p>
                        <p>$/bushel</p>                        
                    </div>                    
                </div>                
                <div className = "females">
                    <div className = "priceArea">
                        <h3>Females</h3>
                        <p>$/dozen</p>
                        <p>$/half bushel</p>
                        <p>$/bushel</p>
                    </div>
                </div>
                <div className = "softshells">
                    <div className = "priceArea">
                        <h3>Soft Shells </h3>
                        <p><em>(availability varies)</em></p>
                        
                    </div>
                </div>
                <div className = "fish">
                    <div className = "priceArea">
                        <h3>Fresh Fish</h3>
                        <p><em>(availability varies)</em></p>
                    </div>
                </div>
                <div className = "other">
                    <div className = "priceArea">
                        <h3>Other Products</h3>
                        <p>JO Crab Spice by the bag </p>
                        <p>Crab mallets</p>
                        <p>Steamer pots</p>
                    </div>
                </div>
            </div>
        </main>)
    }

}


export default Prices;