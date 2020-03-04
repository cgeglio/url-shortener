export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.urls;
    case 'ADD_URL':
      let allUrls = [...state, action.url]
      return allUrls
    case 'DELETE_URL':
      let remainingUrls = state.filter(url => url.id !== action.url.id)
      return remainingUrls
    default:
      return state;
  }
};
