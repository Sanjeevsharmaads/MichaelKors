import React, { Component } from 'react';
import './App.css';

class Navigation extends React.Component {
     constructor(props){
        super(props);
     this.state={data:[{"title":"Women"}, {"title":"Men"},{"title":"Collections"},{"title":"HandBags"},{"title":"Shoes"},{"title":"Watches"},{"title":"Accessories"},{"title":"Gifts"},{"title":"Sale"},{"title":"Destination Kors"}]};
}
    
     render() {
        return(
            <div class="navigation">
                <ul>
                    {this.state.data.map(function(data, i){
                    return <li key={i}>{data.title}</li>
                    })}
                </ul>
        </div>
 )
}
}
export default Navigation;