const baseURL = 'https://thinkful-list-api.herokuapp.com/cody/bookmarks'

const setupAPI = () => {

  const getBookmarks = () => {
    return fetch(baseURL)
  }

  const getBookmark = id => {
    return fetch(`${baseURL}/${id}`)
  }

  const createBookmark = data => {
    const {
      title,
      url,
      desc,
      rating } = data

    return fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        url,
        desc,
        rating
      })
    })
  }

  const updateBookmark = (id, data) => {
    const {
      title,
      url,
      desc,
      rating } = data

    return fetch(`${baseURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        url,
        desc,
        rating
      })
    })
  }

  const deleteBookmark = id => {
    return fetch(`${baseURL}/${id}`, {
      method: 'DELETE'
    })
  }

  return {
    getBookmark,
    getBookmarks,
    createBookmark,
    updateBookmark,
    deleteBookmark
  }

}