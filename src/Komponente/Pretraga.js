import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Pretraga extends Component {
  render(){
    return(
      <div className = "divPretraga">
      <img src= "http://www.planwallpaper.com/static/images/pokemon_3wr73Ct.png" id="logo"/>
      <form id = "mF">
        <input type = "text" ref = "upit" />
      </form>
        <input type = "submit" onClick = {this.createAjax.bind(this)} id="potvrda" value="Pretraga po imenu"/><br />
        <input type = "submit" onClick = {this.createAjax2.bind(this)} id="potvrdadva" value="Pretraga po boji"/>
      </div>
      
      );
  }

  createAjax(){
    var query    = ReactDOM.findDOMNode(this.refs.upit).value.toLowerCase();

    if(query === ""){
      $("#prazanUnos").fadeIn(1000);
      $('#prazanUnos').text("Popunite polje");
      $("#prazanUnos").css({"background-color": "orange", "color": "white", "padding": "5px", "font-family": "sans-serif", "margin-top": "-20px"});
      $("#prazanUnos").fadeOut(3000);

    }else{
      var URL = 'https://www.pokeapi.co/api/v2/pokemon/' + query;
      this.props.pretraga(URL)
    }
      document.getElementById('mF').reset();  
  }



   createAjax2(){
      var query    = ReactDOM.findDOMNode(this.refs.upit).value.toLowerCase();
      if(query ===""){
        $("#prazanUnos").fadeIn(1000);
        $('#prazanUnos').text("Popunite polje");
        $("#prazanUnos").css({"background-color": "orange", "color": "white", "padding": "5px", "font-family": "sans-serif", "margin-top": "-20px"});
        $("#prazanUnos").fadeOut(3000);
      }else{
        var URL2 = 'https://www.pokeapi.co/api/v2/pokemon-color/' + query;
        this.props.pretraga2(URL2)
       }
      document.getElementById('mF').reset();      
  }

}
    
export default Pretraga;