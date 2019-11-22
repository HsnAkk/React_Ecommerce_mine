import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Home from './components/Home';
import Shop from './components/Shopping/Shop';
import About from './components/AboutUs/About';
import Blog from './components/BlogPage/Blog';
import Contact from './components/ContactPage/Contact';
import Error from './components/Error';
import CategoryItem from './components/Shopping/CategoryItem';
import Details from './components/Details';
import Cart from './components/Cart/Cart';

import './App.css';



class App extends Component {
  render () {
    return (
      <>
        <NavbarMenu />
        <Switch>
          <Route exact path="/" component = { Home } />
          <Route exact path="/shop" component = { Shop } />
          <Route exact path="/shop/:category" component = { CategoryItem } />
          <Route  path="/details" component = { Details } />
          <Route  path="/cart" component = { Cart } />
          <Route  path="/about" component = { About } />
          <Route  path="/blog" component = { Blog } />
          <Route  path="/contact" component = { Contact } />
          <Route component = { Error } />
        </Switch>
      </>
    );
  }
}

export default App;
