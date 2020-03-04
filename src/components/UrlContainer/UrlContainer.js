import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';
import { getUrls } from '../../apiCalls';

export class UrlContainer extends Component {

  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
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
  setUrls: urls => dispatch(setUrls(urls))
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
