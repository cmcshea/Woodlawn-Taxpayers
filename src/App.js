import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/membership" component={Membership} />
          {/* <Route exact path="events" component={Events} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
