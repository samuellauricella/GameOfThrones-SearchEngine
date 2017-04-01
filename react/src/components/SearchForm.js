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
     <div className="small-8 large-centered columns">
      <div className="input-group">
      <form  onSubmit={this.handleSubmit} className="input-group-field">
        <div className= "toolbar-search">
        <label htmlFor="search"></label>
        <input type="search"
               className="validate"
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="Search..." />
        </div>
      </form>
      <button type="submit" id="submit" className="button round" onClick={this.handleSubmit}><i className="fi-magnifying-glass"></i></button>
      </div>
    </div>
    );
  }
}
