import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Pretraga from './Komponente/Pretraga';
import Rezultat from './Komponente/Rezultat';
import RezultatDrugi from './Komponente/RezultatDrugi';

class App extends Component {
  constructor(){
    super();
    this.state = {
      rezultatPretrage: []
    };
    this.search = this.search.bind(this);
    this.search2 = this.search2.bind(this);
  }


  
  showResults2(response){
    this.setState({
       rezultatPretrage7: response.pokemon_species,
       rezultatPretrage6: response.name,
       poruka: "Hi, we are ",
       poruka2: " pokemons"
    });
  }


  showResults(response){
      this.setState({
      rezultatPretrage: response.name,
      rezultatPretrage2: response.sprites.back_default,
      rezultatPretrage3: response.sprites.front_default,
      rezultatPretrage4: response.sprites.back_shiny,
      rezultatPretrage5: response.sprites.front_shiny,
      ime: "Zdravo ja sam " + response.forms[0].name.toUpperCase(),
    });
  }

  // ajax request za pretragu po imenu
  search(URL){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL,
      success: function(response){
        this.showResults(response);
      }.bind(this),

      error: function(request,status,errorThrown) {
        $("#greska").fadeIn(1000);
        $('#greska').text("Rezultat pretrage nije pronadjen");
        $("#greska").css({"background-color": "darkred", "color": "white", "padding": "5px", "font-family": "sans-serif", "margin-top": "-20px"});
        $("#greska").fadeOut(3000);
   }

    });
  }

  // ajax request za pretragu po boji
  search2(URL2){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL2,
      success: function(response){
        this.showResults2(response);
      }.bind(this),

      error: function(request,status,errorThrown) {
        $("#greska").fadeIn(1000);
        $('#greska').text("Rezultat pretrage nije pronadjen");
        $("#greska").css({"background-color": "darkred", "color": "white", "padding": "5px", "font-family": "sans-serif", "margin-top": "-20px"});
        $("#greska").fadeOut(3000);
   }

    });
  }

  render() {
    return (
      <div className="glavniDiv">
        <Pretraga  pretraga = {this.search} pretraga2 = {this.search2}/>
        <Rezultat  drugi={this.state.rezultatPretrage7} rezultat = {this.state.rezultatPretrage2} rezultat2 = {this.state.rezultatPretrage3}
        rezultat3 = {this.state.rezultatPretrage4} rezultat4 = {this.state.rezultatPretrage5} ime={this.state.ime} treci={this.state.rezultatPretrage6} poruka1={this.state.poruka} poruka2={this.state.poruka2}/>
      </div>
    );
  }
}


export default App;
