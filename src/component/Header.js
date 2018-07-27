import React, { Component } from 'react';
import Topbar from './Topbar.js'
import NavigationWrapper from './NavigationWrapper.js'
import './App.css';

class Header extends React.Component {
 render() {
    return (
      <div>
      	<Topbar />
        <NavigationWrapper />
      </div>
    );
  }
}

export default Header;
