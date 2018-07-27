import React, { Component } from 'react';
import './App.css'

class MenuExpanded extends React.Component {
    constructor(props){
        super(props);
     this.state={data:[{"title":"Refine By","heading":"Style","item1":"Printed","item2":"Solid"},{"heading":"FIT","item1":"Slim","item2":"Tailored classic"},{"heading":"SLEEVE TYPE","item1":"Long Sleeve","item2":"Short Sleeve"}]};
}
    
     render() {
        return(
           <div class="plp-navigation">
           <div aria-hidden="false" class="navigation-panel accordion-collapsed">
                <ul>
                    {this.state.data.map(function(data, i){
                    return <div>
                    <div className="filter-heading">{data.title}</div>
                        
                        <div className="heading">{data.heading}</div>
                        <li className="list">{<input type="checkbox" value={data.item1}/>}{data.item1}</li>
                        <li className="list">{<input type="checkbox" value={data.item2}/>}{data.item2}</li>
                        </div>
                          })}
                  
                </ul>
            </div>
            </div>    
            
 )
}
}

export default MenuExpanded;