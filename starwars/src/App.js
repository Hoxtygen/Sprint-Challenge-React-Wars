import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Button from './components/Button';



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      prevPage: null,
      nextPage: null
    };
  }

  handleNextPage = ()=> {
    this.getCharacters(this.state.nextPage)
  }

  handlePrevPage = () => {
    this.getCharacters(this.state.prevPage)
  }

  componentDidMount() {
    //this.getCharacters('https://swapi.co/api/people/');
    this.getCharacters('https://swapi.co/api/people/')
  }

  getCharacters = (url) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ 
          starwarsChars: data.results,
          prevPage: data.previous,
          nextPage: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const {  prevPage, nextPage } = this.state
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
          characters = {this.state.starwarsChars}
        />
        <div className="button-container">
          {this.state.prevPage ? (
            <Button value = "Previous"
            previous = {prevPage}
            handleClick = {this.handlePrevPage}
            />
          ) : null
          }

          <Button 
              handleClick ={this.handleNextPage}
                next = {nextPage}  
              value = "Next"/>
        </div>
      </div>
    );
  }
}

export default App;
