import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'

import Contact from './components/pages/contact/Contact';
import Gallery from './components/pages/gallery/Gallery';
import Home from './components/pages/home/Home';
import Media from './components/pages/media/Media';

import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/media' component={Media} />
          <Route path='/contact-us' component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;
