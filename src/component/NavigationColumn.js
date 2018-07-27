import React, { Component } from 'react';
import  Utility from './Utility.js'
import LogoContainer from './LogoContainer.js'
import  Navigation from './Navigation.js'
import './App.css'

class NavigationColumn extends React.Component {
 render() {
    return (
    	<div class="mk-nav-columns">
    		<Utility />
    		<Navigation />
        </div>
    );
  }
}

export default NavigationColumn;