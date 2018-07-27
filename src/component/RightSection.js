import React, { Component } from 'react';
import RightSectionpart from './RightSection2.js'
import './App.css';

class RightSection extends React.Component {
  constructor(props){
        super(props);
    this.state={data:[
    	{"title":"Company", "item1":"About US","item2":"Kors Cares","item3":"Careers","item4":"Investor Relations"},
    	{"title":"My Acoount","item1":"Create Account","item2":"Accounts"},
    	{"title":"Customer Service", "item1":"Live Chat","item2":"FAQ","item3":"Track My Order","item4":"Returns & exchange","item5":"Shipping Terms","item6":"Payment policies","item7":"Gift Cards","item8":"Contact us","item9":"Warranty & repair"}]};
 	 
  }
 render() {
    return (
      <div className="footer-wrapper aria-restricted container" data-reactid="2227">
      <footer role="content" className="row footer-inner" data-reactid="2229">
      <div className="right-section mk-footer-smalltext large-6 small-12 columns" data-reactid="2271">
		
			 {this.state.data.map(function(data ,i){
            return <div className="rightsection">
            
            <ul>
            <li className="title">{data.title}</li>
         	<li>{data.item1}</li>
         	<li>{data.item2}</li>
         	<li>{data.item3}</li>
         	<li>{data.item4}</li>
         	<li>{data.item5}</li>
         	<li>{data.item6}</li>
         	<li>{data.item7}</li>
         	<li>{data.item8}</li>

         	</ul>  	
         	</div>
            })}
			 </div>
		</footer>
	  </div>
    );
  }
}

export default RightSection;
