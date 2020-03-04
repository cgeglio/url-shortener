import { urls } from '../reducers/urls.js'

describe('urls', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = urls(undefined, {});
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_URLS', () => {
    const mockUrls = [{
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }]
    const mockState = [];
    const mockAction = {
      type: 'SET_URLS',
      urls: mockUrls,
    }
    const expected = [{
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }];
    const result = urls(mockState, mockAction);
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is ADD_URL', () => {
    const mockUrl = {
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    };
    const mockState = [{
      id: 5,
      long_url: "https://google.com/photo...",
      short_url: "http://localhost:3001/useshorturl/5",
      title: 'Coolest photo'
    }];
    const mockAction = {
      type: 'ADD_URL',
      url: mockUrl,
    }
    const expected = [{
      id: 5,
      long_url: "https://google.com/photo...",
      short_url: "http://localhost:3001/useshorturl/5",
      title: 'Coolest photo'
    },
    {
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }];
    const result = urls(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})
