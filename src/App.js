import React, { Component } from 'react'
import './App.css';
import Header from './containers/Header/Header';
import Panel from './containers/Panel/Panel';
import HeroSection from './containers/HeroSection/HeroSection';
import ShopSection from './containers/ShopSection/ShopSection';
import Footer from './containers/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Panel/>
        <HeroSection/>
        <ShopSection/>
        <Footer />
      </div>
    );
  }
}

export default App