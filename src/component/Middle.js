import React, { Component } from 'react';
import SideMenu from './SideMenu.js'
import TitleListing from './TitleListing.js'
import './App.css';

class Middle extends React.Component {
 render() {
    return (
    	
    	<main class="medium-12 small-12 large-9 columns result-container panel removeMargin" data-reactid="2372">
        <div >
        	<SideMenu />
            <TitleListing />
        </div> 
        </main>
    );
  }
}

export default Middle;