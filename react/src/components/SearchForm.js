import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ' '

    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearchChange (e) {
    this.setState({ searchText: e.target.value });
  }


  handleSubmit (e){
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <div>
      <form  onSubmit={this.handleSubmit} className="col s12">
        <div className= "input-field inline" >
        <label htmlFor="search"></label>
        <input type="search"
               className="validate"
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="Search..." />
             </div>
          <br></br>
        <button type="submit" id="submit" className="btn waves-effect waves-light">search</button>
      </form>
      <br></br>
      </div>
    );
  }
}
