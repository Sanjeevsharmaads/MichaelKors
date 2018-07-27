import React, { Component } from 'react';
import ShirtCollapsed from './ShirtCollapsed.js'
import SideMenu from './SideMenu.js'
import PanelContent from './PanelContent.js'
import TitleListing from './TitleListing.js'
import Section from './Section.js'
import Middle from './Middle.js'
import './App.css';

class MainContainer extends React.Component {
  
 render() {
    return (
    	<div  >
    		<ShirtCollapsed />
    		<Section />
    		<Middle/>
    		<PanelContent />
        </div>
    );
  }
}

export default MainContainer;