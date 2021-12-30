import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import CharacterCards from './components/CharacterCards';
import Footer from './components/Footer';
import Homersapien from './components/Homersapien';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route path="/">
            <Homersapien />
            <CharacterCards />
          </Route>
        </Switch>
      </Router>   
      <Footer />
    </>
  );
}

export default App;