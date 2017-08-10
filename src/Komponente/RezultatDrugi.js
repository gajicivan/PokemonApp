import React, { Component } from 'react';

class RezultatDrugi extends Component {
  render() {
      return (
    	<div className = "divRezultatDrugi"> 
       <h2>{this.props.treci}</h2>  
        <h3 className = "item">{this.props.rezultic}</h3>
    	</div>
    	); 
    
  }
}

export default RezultatDrugi;


