import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header.js';
import MainContainer from './component/MainContainer.js';
import Footer from './component/Footer.js'

class App extends React.Component {
 render() {
    return (
      <div class="app">
      	<Header/>
      	<MainContainer />
      	<Footer/>
      </div>
    );
  }
}

export default App;
