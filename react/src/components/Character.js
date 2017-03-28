import React, { Component } from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){

  let image = this.props.name.replace(/ /g,"_");

  const divStyle = {
  padding: "30px",
  margin: "40px",
  };

  const cardstyle = {
  padding: "30px",
  margin: "20px",
  };

  return(
    <div className="row" >
    <br></br>
    <br></br>
      <div className="col s3" style={divStyle}>
        <div className="card horizontal" style={cardstyle}>
        <div className="card-stacked">
        <div className="card-content">
        <h1>Name: </h1> <h5>{this.props.name}</h5>
        <br></br>
        <h1>Culture: </h1> <h5>{this.props.culture}</h5>
        <br></br>
        <h1>Aliases: </h1> <h5>{this.props.aliases}</h5>
        <br></br>
        <h1>Allegiances: </h1> <h5>{this.props.allegiances}</h5>
        <br></br>
        </div>
        </div>
        </div>
      </div>
      <div className="col s9" style={divStyle}>
        <div className="imageBio" >
      <img src={`https://api.got.show//misc/images/characters/${image}.jpeg`} alt="Image not Found" style={divStyle} className="card horizontal"/>
      </div>
    </div>
  </div>
    )
  }
}
export default Character;
