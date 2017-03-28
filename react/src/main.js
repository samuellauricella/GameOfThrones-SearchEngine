import React from 'react';
import ReactDOM from 'react-dom';
import HouseList from './components/HouseList';
import CharacterList from './components/CharacterList';




$(function() {
  let reactApp = document.getElementById('characters')
  if(reactApp){
    ReactDOM.render(
      <CharacterList />,
      document.getElementById('characters')
    );
  }
});
