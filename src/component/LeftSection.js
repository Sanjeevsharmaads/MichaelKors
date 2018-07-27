import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons';
import './App.css';


class LeftSection extends React.Component {
    constructor(props){
        super(props);
     this.state={data:[{"url":"http://www.facebook.com/michaelkors"},{"url2":"http://www.twitter.com"},{"url3":"http://www.pinterest.com"},{"url4":"http://www.youtube.com"},{"url5":"http://www.instagram.com"}]};
}
  
 render() {
    return (
      <div>
      <div class="footer-wrapper aria-restricted container" aria-hidden="false">
      <span class="visually-hidden" role="alert" aria-live="assertive" aria-atomic="true" id="liveAnnounce"></span>
      <footer role="contentinfo" class="row footer-inner">
      
      <div class="left-section abc mk-footer-largetext large-6 small-12 columns">
      <div class="mk-store-locator row">
      <a class="large-6 columns" href="https://locations.michaelkors.com/search.html">
      <i class="mk-store-locator-icon" aria-hidden="true"></i><span>Find a Store</span></a>
      </div>
      <div class="mk-newsletter-subs">
      <div clas="row">
      <p class="large-6 small-7 columns">Sign Up for updates<br/>from Michael Kors</p>
      </div>
      <form class="signup-form mk-form" name="footer_complete_account">
      <div class="email-input form-control">
      <input type="hidden" name="_dyncharset" value="UTF-8"/>
      <input type="hidden" name="_dynSessConf" value=""/>
      <input type="hidden" name="formName" id="formName" value="footer_complete_account"/>
      <input type="hidden" id="successUrl" name="successUrl" value="/myaccount/createAccount.jsp"/>
      <input type="hidden" name="formHandler" id="formHandler" value="/atg/userprofiling/ProfileFormHandler"/>
      <input type="hidden" name="handleMethod" id="handleMethod" value="EmailSubscriptionValidation"/>
      <input type="hidden" name="_DARGS" value="/myaccount/createAccount.jsp"/>
      <input type="hidden" name="_D:mailingListSignUplogin" value=" "/>
      <input type="hidden" name="Join" id="Join" value="Join" title="Join"/>
      <label><div class="">
      <input type="text" id="footer_email" name="mailingListSignUplogin" placeholder="Enter Your Email" class="signup-input" />
      </div></label></div></form> 

          
    
                           
                     
              <div class="social">
              <SocialIcon url="http://www.facebook.com/michaelkors"/>
              </div>
               <div class="social">
               <SocialIcon url="http://www.twitter.com/michaelkors"/>
               </div>
                <div class="social">
               <SocialIcon url="http://www.pinterest.com/michaelkors"/>
               </div>
                <div class="social">
               <SocialIcon url="http://www.instagram.com/michaelkors"/>
              </div>
                      

    </div>
    </div>
      </footer>
      </div> 
      </div>
    );
  }
}

export default LeftSection;
