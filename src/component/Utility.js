import React, { Component } from 'react';
import  region from './region.js'
import useritem from './useritem.js'


class Utility extends React.Component {
  

  
 render() {
    return (
    	<div class="utility-nav aria-restricted row" aria-hidden="false">
    	
    	<region />

    	<user-item />
    	        </div>
      
    );
  }
}

export default Utility;