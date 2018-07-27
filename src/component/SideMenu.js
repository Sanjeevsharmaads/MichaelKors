import React, { Component } from 'react';
import MenuExpanded from './MenuExpanded.js';
import './App.css'

class SideMenu extends React.Component {
    constructor(props){
        super(props);
     this.state={data:[{"title":"Clothing"},{"item1":"Tshirt & polos","item2":"Shirts","item3":"Sweater & Hoodies","item4":"Pants & Denims","item5":"Shorts and Swims","item6":"jacket and outwear","item7":"Bags","item8":"Wallets","item9":"Watches"},
                        {"title":"Bags"},{"title":"Wallets"},{"title":"Watches"},{"title":"Accessories"},{"title":"Cologne"},{"title":"Shoes"},
                        {"title2":"Shops"},{"litem1":"NEW ARRWALS","litem2":"THE TRAVEL EDIT","litem3":"THE SIGNATURE SHOP","litem4":"NEW NEUTRALS","litem5":"WATCH ENGRAVING","litem6":"WEARABLE TECHNOLOGY"} ]};
}
    
     render() {
        return(
           <div class="plp-navigation">
           <div aria-hidden="false" class="navigation-panel accordion-collapsed">
                <ul>
                    {this.state.data.map(function(data, i){
                    return <div className="nav-category-list">
                    <div class="title">{data.title}</div>
                        
                        <li>{data.item1}</li>
                        <li>{data.item2}</li>
                        <li>{data.item3}</li>
                        <li>{data.item4}</li>
                        <li>{data.item5}</li>
                        <li>{data.item6}</li>
                        <li>{data.item7}</li>
                        <li>{data.item8}</li>
                        <li>{data.item9}</li>

                       
                       
                        <div class="list-expand" >
                        <div className="ltitle">{data.title2}</div>
                        <ul>
                         <li>{data.litem1}</li>
                         <li>{data.litem2}</li>
                         <li>{data.litem3}</li>
                         <li>{data.litem4}</li>
                         <li>{data.litem5}</li>
                         <li>{data.litem6}</li>
                         </ul>
                        </div>
                    </div>
                    })}
                </ul>
            <MenuExpanded />
            </div>
            </div>
        
           
 )
}
}

export default SideMenu;