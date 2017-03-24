import React, { Component } from 'react';
import House from './House';
import axios from 'axios';

class HouseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      search: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.getHouses = this.getHouses.bind(this);
  }

  updateSearch(event) {
     this.setState({search: event.target.value.substr(0, 20)});
   }

  getHouses() {
    axios.get('https://api.got.show/api/houses/')
    .then(response => {
      this.setState({
        houses: response.data,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  componentDidMount() {
    this.getHouses();
  }




  render() {
    let houses = this.state.houses.map((house,index) => {
      if (house.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1){
      return (
        <House
          key = {house._id}
          name={house.name}
          region= {house.region}
          overlord= {house.overlord}
          image = {house.imageLink}
          />
      );
      }
    });
    return(
      <div>
        <input type="text" className="search" placeholder="Search"
        value={this.state.search}
        onChange={this.updateSearch}/>
        {houses}
      </div>
    )
  }
};

export default HouseList;
