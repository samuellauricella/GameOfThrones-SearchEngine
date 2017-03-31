import React, { Component } from 'react';
import Character from './Character';
import axios from 'axios';
import SearchForm from './SearchForm';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentPage: 1,
      charactersPerPage: 5
      };
    this.getCharacters = this.getCharacters.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  getCharacters(query) {
    axios.get(`https://simple-search-service-wadewilson-1833.mybluemix.net/search?q="${query}"`)
    .then(response => {
      this.setState({
        characters: response.data.rows,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  componentDidMount() {
    this.getCharacters();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    let indexOfLastCharacter = this.state.currentPage * this.state.charactersPerPage;
    let indexOfFirstCharacter = indexOfLastCharacter - this.state.charactersPerPage;
    let currentCharacters = this.state.characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    let characters = currentCharacters.map((character,index) => {
      return (
        <Character
          key = {character._id}
          name={character.name}
          allegiances= {character.allegiances.join(', ')}
          culture= {character.culture}
          born= {character.born}
          actor = {character.played_by}
          aliases = {character.aliases.join(', ')}
          />
      );
    });
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.characters.length / this.state.charactersPerPage); i++){
      pageNumbers.push(i);}
      let renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
            className="button">
            {number}
          </li>
        );
      });
      return (
        <div>
          <SearchForm onSearch={this.getCharacters} />
          {characters}
          <div className="small-7 large-7 columns">
            <ul className="pagination" role="navigation" aria-label="Pagination">
              <li className="">{renderPageNumbers}</li>
            </ul>
          </div>
        </div>
    )
  }
};

export default CharacterList;
