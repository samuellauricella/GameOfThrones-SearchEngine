import React, { Component } from 'react';
import axios from 'axios';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profimage:'',
      };
      this.getImages = this.getImages.bind(this);
    }

    getImages(image) {
      fetch(`https://api.got.show//misc/images/characters/${image}.jpeg`)
      .then(response => {

        if (response.url === "https://api.got.show/doc/"){
          this.setState({
            profimage: "https://j.gifs.com/xGWvQl.gif",
          });
        }else{

        this.setState({
          profimage: `https://api.got.show//misc/images/characters/${image}.jpeg`,
        });
        }
      })
    }

    componentDidMount() {
      let image = this.props.name.replace(/ /g,"_");
      this.getImages(image);
    }

  render (){
    let profilepicture = (this.state.profimage)
  return(

    <div className="row">
      <div className="small-6 large-centered columns">
        <br></br>
        <div className="cardHover">
        <div className="card">
          <div className="image">
            <img src={profilepicture}/>
          </div>
          <div className="content">
            <ul>
              <h1 className="namefont"><b>{this.props.name}</b></h1>
            <li className="detailsfont"><b>Aliases:</b> {this.props.aliases}</li>
            <li className="detailsfont"><b>Culture:</b> {this.props.culture}</li>
            <li className="detailsfont"><b>Allegiances:</b> {this.props.allegiances}</li>
            </ul>
          </div>
        </div>
        <br></br>
      </div>
      </div>
      <br></br>
    </div>

    )
  }
}
export default Character;
