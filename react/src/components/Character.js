import React, { Component } from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){

  let image = this.props.name.replace(/ /g,"_");



  return(
    <div className="row">
      <div className="small-6 large-centered columns">
        <br></br>
        <div className="card">
          <div className="image">
            <img src={`https://api.got.show//misc/images/characters/${image}.jpeg`}/>
          </div>
          <div className="content">
            <ul>
              <h1><b>{this.props.name}</b></h1>
            <li><b>Aliases:</b> {this.props.aliases}</li>
            <li><b>Culture:</b> {this.props.culture}</li>
            <li><b>Allegiances:</b>{this.props.allegiances}</li>
            </ul>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>

    )
  }
}
export default Character;
