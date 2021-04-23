import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


  import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Contact Dock of the Bay Seafood";
    }

    render() {
        return (        <main id = "contact">
        <div id = "contactPage">
            <h3>Store Address: 4 Friendship Rd, Friendship MD 20758</h3>
            <p>(We're behind the antique store)</p>
            <h3>Order by Phone: 240-610-5997</h3>
            <h3>Sign up for our Mailing List:</h3>
            <form action="https://squareup.com/outreach/Da4Ly3/subscribe" method="POST" target="_blank"><input type="email" name="email_address" placeholder="Your Email Address" style={{height: 38, padding: '0 16px', fontSize: 14, border: '1px solid #bec3c8', borderRadius: 3, marginRight: 8, fontFamily: '"Helvetica Neue", Helvetica, sans-serif'}} /><input type="hidden" name="embed" defaultValue="true" /><button type="submit" style={{cursor: 'pointer', backgroundColor: '#546476', color: 'white', height: 40, border: 0, borderRadius: 3, fontSize: 14, padding: '0 16px', fontFamily: '"Helvetica Neue", Helvetica, sans-serif', fontWeight: 500}}>Join Now</button></form>

        </div>
    </main>);
    }
}


export default Contact;