import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Button from './components/Button';


const Path_Base = "https://swapi.co/api/";
const Default_Query = "people"
const Param_Page = "page=";
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      searchTerm: Default_Query
    };
  }

  componentDidMount() {
    //this.getCharacters('https://swapi.co/api/people/');
    this.getCharacters(this.state.searchTerm)
  }

  getCharacters = (searchTerm, PAGE = 1) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(`${Path_Base}${searchTerm}/?${Param_Page}${PAGE}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
          characters = {this.state.starwarsChars}
        />
        <div className="button-container">
          <Button value = "Previous"/>
          <Button  value = "Next"/>
        </div>
      </div>
    );
  }
}

export default App;
