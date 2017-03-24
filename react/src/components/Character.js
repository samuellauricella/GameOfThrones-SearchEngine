import React, { Component } from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    const style = {
    width: '40rem',
  };



  if(this.props.image == null){
  return(
    <div className="card" style={style}>

      <div className="card-block">
        <h4 className="card-title">{this.props.name}</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> House: {this.props.house}</li>
        <li className="list-group-item"> Titles: {this.props.titles}</li>
      </ul>
    </div>

  )
} else {
    return(
      <div className="card" style={style}>
        <img className="card-img-top" src={`https://api.got.show/${this.props.image}`} alt="Card image cap"/>
        <div className="card-block">
          <br></br>
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> House: {this.props.house}</li>
          <li className="list-group-item"> Titles: {this.props.titles}</li>
        </ul>
      </div>

      )
    }
  }
}
export default Character;
