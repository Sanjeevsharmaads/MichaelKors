import React, { Component } from 'react';
import './App.css';

class LogoContainer extends React.Component {
      constructor(props){
        super(props);
     this.state={data:[{"imageURL":"https://www.michaelkors.com/img/logo_mk.png"}]};
}
 
  render() 
       {
    return(
        <div className="logocontainer">
          <ul>
            {this.state.data.map(function(data,i){
                return <li key={i}>{<img src={data.imageURL} />}</li>
                                })}
          </ul>
        </div>
 )
}
  
}

export default LogoContainer;