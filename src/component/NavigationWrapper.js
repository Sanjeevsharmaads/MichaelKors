import React, { Component } from 'react';
import HamburgerContainer from './HamburgerContainer.js'
import  ShowPromo from './ShowPromo.js'
import Loyality from './Loyality.js'
import  NavigationColumn from './NavigationColumn.js'
import  LogoContainer from './LogoContainer.js'
import './App.css';

class NavigationWrapper extends React.Component {
 render() {
    return (
    	<div>
    		<HamburgerContainer/>
    		<LogoContainer />
    		<NavigationColumn />
    		<ShowPromo />
    		<Loyality />
      	</div>
    );
  }
}

export default NavigationWrapper;