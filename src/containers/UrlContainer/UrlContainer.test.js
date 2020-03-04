import { UrlContainer, mapStateToProps, mapDispatchToProps } from './UrlContainer';
import React from 'react';
import { setUrls } from '../../actions';
import { shallow } from 'enzyme';

describe('UrlContainer', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<UrlContainer urls={[]}/>)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  it('should return an array of url objects', () => {
    const mockState = {
      urls: [{
        id: 1,
        long_url: "https://images.unsplash.com/photo...",
        short_url: "http://localhost:3001/useshorturl/2",
        title: 'Awesome photo'
      }],
      cats: [{name: 'Bithcuits'}, {name: 'Peanut'}]};

    const expected = {
      urls: [{
        id: 1,
        long_url: "https://images.unsplash.com/photo...",
        short_url: "http://localhost:3001/useshorturl/2",
        title: 'Awesome photo'
      }]
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the setUrls action when setUrls is called', () => {
    const mockUrls = [{
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }];
    const mockDispatch = jest.fn();
    const actionToDispatch = setUrls(mockUrls);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setUrls(mockUrls);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })
});
