import React, { Component } from 'react';
import './App.css';
import SideMenu from './SideMenu.js';
  
 class TitleListing extends React.Component {



    constructor(props){
        super(props);
    this.state={data:[{"imageURL":"http://michaelkors.scene7.com/is/image/MichaelKors/CU84CF44WV-1672_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Floral Cotton Strech-Shirt","price":"$98"},
                        {"imageURL":"http://michaelkors.scene7.com/is/image/MichaelKors/CB94C6GAG5-0100_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit  Chambray Stretch-Cotton","price":"$178"},
                        {"imageURL":"http://michaelkors.scene7.com/is/image/MichaelKors/CF74CCY3PW-0436_IS?$categoryMediumNew$","title":"michael kors mens","description":"Tailored and Classic-Fit  New Shirt","price":"$89.5"},
                        {"imageURL":"http://michaelkors.scene7.com/is/image/MichaelKors/CU64CB50WK-0396_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Floral Cotton Strech-Shirt ","price":"$98"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CR74CJ22NU-0396_2?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Chambray Streched-Shirt","price":"$128"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CU84CJ057R-0436_2?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Floral Cotton Strech-Shirt","price":"$68"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CF64CBU0WK-0396_2?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Denim BNew Collection","price":"$128"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CU84CHR4XX-0436_2?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Botanical Stretch-Cotton","price":"$68"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CS84CDT50W-2635_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Botanical Stretch-Cotton","price":"$68"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CU84CJ156Y-0436_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Botanical Stretch-Cotton","price":"$68"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CU84CD657P-0436_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Botanical Stretch-Cotton","price":"$68"},
                        {"imageURL":"https://michaelkors.scene7.com/is/image/MichaelKors/CU84CHS577-0100_IS?$categoryMediumNew$","title":"michael kors mens","description":"Slim-Fit Botanical Stretch-Cotton","price":"$68"},
                        ]};


}
    
   render() 
       {
    return(
                


               <main class="medium-12 small-12 large-9 columns result-container panel removeMargin" data-reactid="2372">
               <div class="medium-12 row panel tile-listing">
            {this.state.data.map(function(data,i){
                return  <div className="listimage">
                {<img  src={data.imageURL} />}
                <ul>
                <li>{data.title}</li>
                <li>{data.description}</li>
                <li>{data.price}</li>
                </ul>
                </div>
            
                                })}
        </div>
        </main>


       
 );
}
}
export default TitleListing;

