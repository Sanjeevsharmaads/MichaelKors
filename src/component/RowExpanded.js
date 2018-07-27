import React, { Component } from 'react';
import './App.css';

class RowExpanded extends React.Component {

    constructor(props){
        super(props);
    this.state={data:[{"title":2018}, {"title":"privacy-policy"},{"title":"Terms & Conditions"},{"title":"Cookies/Ad Choices"},{"title":"Start CoBrowse"}]};
}
    
   render() 
       {
    return(
        <ul class="footerlink">
            {this.state.data.map(function(data, i){
            return <li key={i}>{data.title}</li>
            })}
        </ul>
        
 )
}
}

export default RowExpanded;