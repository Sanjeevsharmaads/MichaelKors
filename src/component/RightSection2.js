import React, { Component } from 'react';
import './App.css';

class RightSection2 extends React.Component {
  constructor(props){
        super(props);
    this.state={data:[{"title2":"My Acoount"},{"item2":"Create Account"},{"item2":"Accounts"}]};
  }
 render() {
    return (
      <div>
		
			 {this.state.data.map(function(data ,i){
            return <div class="rightsection2">
      		<ul class="data1">
         	<li class="title1">{data.title2}</li>
         	<li>{data.item2}</li>
         	</ul>

         	
         	</div>
            })}


	  </div>
    );
  }
}

export default RightSection2;
