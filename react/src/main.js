import React from 'react';
import ReactDOM from 'react-dom';
import CharacterList from './components/CharacterList';
import HouseList from './components/HouseList';


$(function() {
  ReactDOM.render(
    <HouseList />,
    document.getElementById('home')
  );
});


$(function() {
  ReactDOM.render(
    <CharacterList />,
    document.getElementById('away')
  );
});
