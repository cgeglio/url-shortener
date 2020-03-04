import { UrlForm } from './UrlForm';
import React from 'react';
import { addUrl } from '../../actions';
import { shallow } from 'enzyme';
import { getShortUrl } from '../../apiCalls'

jest.mock('../../apiCalls.js')

describe('UrlForm', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UrlForm />);
    getShortUrl.mockImplementation(() => {
     return Promise.resolve({
       id: 4,
       title: 'kitten portrait',
       long_url: 'www.google.photos/...',
       short_url: 'goo.pho/'
     })
   })
 });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleNameChange is called', () => {
    const mockEvent = { target: { name: 'title', value: 'Kitten Portrait'} };
    const expected = 'Kitten Portrait';

    wrapper.instance().handleNameChange(mockEvent);
    expect(wrapper.state('title')).toEqual(expected);
  });

  it('should call createShortUrl and clearInputs when handleSubmit is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().createShortUrl = jest.fn().mockImplementation();
    wrapper.instance().clearInputs = jest.fn();
    const expected = {
      title: 'kitten portrait',
      long_url: 'www.google.photos/...'
    }

    wrapper.instance().setState({
      title: 'kitten portrait',
      urlToShorten: 'www.google.photos/...'
    })
    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.instance().createShortUrl).toHaveBeenCalledWith(expected);
    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  });

  it('should call getShortUrl when createShortUrl is called', () => {
    const mockUrl = {
      title: 'kitten portrait',
      long_url: 'www.google.photos/...'
    }
    wrapper.instance().createShortUrl(mockUrl);
    expect(getShortUrl).toHaveBeenCalledWith(mockUrl);
  })

  it('should reset state when clearInputs is called', () => {
    wrapper.instance().setState({
      title: 'kitten portrait',
      urlToShorten: 'www.google.photos/...'
    })
    wrapper.instance().clearInputs();
    expect(wrapper.state()).toEqual({title: '', urlToShorten: ''});
  })

  it('should call handleSubmit when the "shorten please" button is clicked', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(mockEvent);
  });
})
