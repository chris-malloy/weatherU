import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';
import { Row, Input, Button, Icon } from 'react-materialize';

export class SearchBar extends Component {
  constructor() {
    super();

    this.state = { term: '', error: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(e) {
    this.setState({ term: e.target.value })
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <Row>
        <form onSubmit={this.onFormSubmit}>
          <Input error="" s={12} label="search" onChange={this.onInputChange} value={this.state.term}></Input>
          <Button type="submit" style={{width: '100%'}} waves='light'><Icon center>search</Icon></Button>
          </form>
      </Row>
    )
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchBar);
