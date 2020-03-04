export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const getShortUrl = (urlInfo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(urlInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch('http://localhost:3001/api/v1/urls', options)
    .then(response => {
      if(!response.ok) {
        throw Error('Error posting')
      }
      return response.json()
    })
}

export const removeUrl = (id) => {
  return fetch(`http://localhost:3001/api/v1/urls/${id}`, {method: 'DELETE'})
    .then(response => {
      if(!response.ok) {
        throw Error('Error deleting')
      }
      return response
    })
}
