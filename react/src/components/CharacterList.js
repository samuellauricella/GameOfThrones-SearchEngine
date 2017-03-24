import React, { Component } from 'react';
import Character from './Character';
import axios from 'axios';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      characters: [],
      search: '',
      currentPage: 1,
      charactersPerPage: 10
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  updateSearch(event) {
     this.setState({search: event.target.value.substr(0, 20)});
   }

  getCharacters() {
    axios.get('https://api.got.show/api/characters/')
    .then(response => {
      this.setState({
        characters: response.data,
        allCharacters: response.data,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  componentDidMount() {
    this.getCharacters();
  }



  render() {
    let currentCharacters;
    let indexOfLastCharacter = this.state.currentPage * this.state.charactersPerPage;
    let indexOfFirstCharacter = indexOfLastCharacter - this.state.charactersPerPage;
    if(this.state.search === ''){
      currentCharacters = this.state.characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    } else {
      currentCharacters = this.state.characters
    }
    let characters = currentCharacters.map((character,index) => {
      if (character.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1){
      return (

        <Character
          key = {character._id}
          name={character.name}
          house= {character.house}
          title= {character.titles}
          image= {character.imageLink}
          />
        );
      }
    });

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(this.state.characters.length / this.state.charactersPerPage); i++){
    pageNumbers.push(i);
  }

  let renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={this.handleClick}
        className="page-number">

        {number}
      </li>
    );
  });

  const style = {
    position: 'auto',
    display: 'block',
    margin: 'auto',
    padding: '10',
};

    return (
      <div>
        <form className="navbar-form navbar-left" role="search" style={style}>
          <div className="form-group" style={style}>
            <input type="text" className="form-control" placeholder="Search" value={this.state.search} onChange={this.updateSearch} style={style}/>
          </div>
        </form>
        {characters}
      </div>
    )
  }
};

export default CharacterList;
