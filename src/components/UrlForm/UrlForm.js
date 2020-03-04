import React, { Component } from 'react';
import { addUrl } from '../../actions';
import { getShortUrl } from '../../apiCalls'
import { connect } from 'react-redux';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.createShortUrl({title: this.state.title, long_url: this.state.urlToShorten})
    this.clearInputs();
  }

  createShortUrl = (urlInfo) => {
    getShortUrl(urlInfo)
      .then(url => this.props.addNewUrl(url))
      .catch(error => console.log('Error posting url'))
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addNewUrl: url => dispatch(addUrl(url))
});

export default connect(null, mapDispatchToProps)(UrlForm);
