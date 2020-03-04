import * as actions from '../actions'

describe('actions', () => {

  it('should have a type SET_URLS', () => {
    const urls = [{
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }]
    const expectedAction = {
      type: 'SET_URLS',
      urls
    }
    const result = actions.setUrls(urls)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type ADD_URL', () => {
    const url = {
      id: 1,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }
    const expectedAction = {
      type: 'ADD_URL',
      url
    }
    const result = actions.addUrl(url)
    expect(result).toEqual(expectedAction)
  })
})
