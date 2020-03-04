export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.urls;
    case 'ADD_URL':
      let allUrls = [...state, action.url]
      return allUrls
    default:
      return state;
  }
};
