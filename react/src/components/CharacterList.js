import React, { Component } from 'react';
import Character from './Character';
import axios from 'axios';
import SearchForm from './SearchForm';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      };
    this.getCharacters = this.getCharacters.bind(this);
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



  render() {

    let characters = this.state.characters.map((character,index) => {
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

    return (
      <div>
        <SearchForm onSearch={this.getCharacters} />
        <br></br>
        {characters}
      </div>
    )
  }
};

export default CharacterList;
