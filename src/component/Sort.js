import React, { Component } from 'react';
import './App.css';
  

  class Sort extends React.Component {
 render() {
    return (
        


<main class="medium-12 small-12 large-9 columns result-container panel">
    	<div class="panel plp-category-heading">
    	<h1>Shirts</h1>
    	</div>
    	<div class="row sort-result-count-panel panel clearfix">
    	<div class="panel left sort-dropdown-panel">
    	<div class="sort-dropdown-container">
    	<span class="sortby-text">Sort by</span>
    	<div class="sort-dropdown-inner-container">
    	<button class="header">"Featured"<span></span></button>
    	<ul class="dropdown-menu ">
    	<li class="menu-option selected-sort-item" data-key="default"><a href="#" role="checkbox" aria-checked="true" data-linktype="anchor" aria-label="Featured" aria-hidden="" data-locale="no-locale-passed">featured</a></li>
    	<li class="menu-option " data-key="highestPriceRange|1"><a href="#" role="checkbox" aria-checked="false" data-linktype="anchor" aria-label="Price High to Low" aria-hidden="" data-locale="no-locale-passed">price high to low</a></li>
    	<li class="menu-option " data-key="lowestPriceRange|0"><a href="#" role="checkbox" aria-checked="false" data-linktype="anchor" aria-label="Price Low to High" aria-hidden="" data-locale="no-locale-passed">price low to high</a></li>
    	</ul>
    	</div>
    	</div>
    	</div>
    	</div>
        </main>


    );
}
}
export default Sort;


