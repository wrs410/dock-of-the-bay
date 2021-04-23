import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';
import Prices from './components/Prices.js';
import Contact from './components/Contact.js';
import Pics from './components/Pictures.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route path = "/pics">
          <Header />
          <Pics />
          <Footer />
        </Route>
      <Route path = "/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path = "/prices">
          <Header />
          <Prices />
          <Footer />
        </Route>
        <Route path = "/">
          <Header />
          <Homepage />
          <Footer />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
