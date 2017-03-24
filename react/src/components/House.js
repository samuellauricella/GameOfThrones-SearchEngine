import React, { Component } from 'react';

class House extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){

  if(this.props.image == null){
  return(
    <div>
      <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-md-3">{this.props.name}</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
    </div>
  )
} else {
    return(
      <div>
        <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-md-3">{this.props.name}</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
      </div>
      )
  }
}
}
export default House;
//       <img src={`https://api.got.show//misc/images/houses/House_Farwynd.png`}/>
// <img src={`https://api.got.show/${this.props.image}`}/>
