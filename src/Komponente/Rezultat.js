import React, { Component } from 'react';
import RezultatDrugi from './RezultatDrugi';

class Rezultat extends Component {
  render() {
    let rezultat;
    if(this.props.drugi){
      rezultat = this.props.drugi.map(rezultic => {
        console.log(rezultic);
        return (
          <RezultatDrugi key={rezultic.name} rezultic={rezultic.name}/>
          );
      });
    }

  	const slike = {
  		prva: this.props.rezultat,
  		druga: this.props.rezultat2,
  		treca: this.props.rezultat3,
  		cetvrta: this.props.rezultat4
  	};
      return (
    	<div className = "divRezultat">
        <div id = "greska"></div>
        <div id = "prazanUnos"></div>
       
        <div>
          {this.props.ime}
        </div>
	    	<img src = {slike.prva} alt= ""/>
	    	<img src = {slike.druga} alt= ""/>
	    	<img src = {slike.treca} alt= ""/>
	    	<img src = {slike.cetvrta} alt= ""/>
        <h2 className = 'pozdravporuka'>{this.props.poruka1} {this.props.treci} {this.props.poruka2}</h2>

        {rezultat}

    	</div>
    	); 
    
  }
}

export default Rezultat;


