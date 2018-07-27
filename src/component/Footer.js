import React, { Component } from 'react';
import LeftSection from './LeftSection.js';
import RightSection from './RightSection.js';
import RowExpanded from './RowExpanded.js';
import './App.css';

class Footer extends React.Component {
  
 render() {
    return (
      <div>
      		<LeftSection />
      		<RightSection />
      		<RowExpanded />
      </div>
    );
  }
}

export default Footer;
