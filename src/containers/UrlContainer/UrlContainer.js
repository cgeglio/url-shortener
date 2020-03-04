import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls, deleteUrl } from '../../actions';
import { getUrls, removeUrl } from '../../apiCalls';

export class UrlContainer extends Component {

  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }

  removeCurrentUrl = (url) => {
    removeUrl(url.id)
      .then(() => this.props.deleteUrl(url))
      .catch(error => console.log('Error deleting url'))
  }

  render() {
    return (
      !this.props.urls.length ? <p>No urls yet! Find some to shorten!</p> :
      <section>
        {this.props.urls.map(url =>
          <div className="url">
            <h3>{url.title}</h3>
            <a href={url.short_url} target="blank">{url.short_url}</a>
            <p>{url.long_url}</p>
            <button onClick={() => this.removeCurrentUrl(url)}>Delete Me!</button>
          </div>
        )}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  urls: state.urls
});

export const mapDispatchToProps = dispatch => ({
  setUrls: urls => dispatch(setUrls(urls)),
  deleteUrl: url => dispatch(deleteUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
