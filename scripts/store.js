const store = {
  bookMarkData: [],
  filterBy: 'all',
  showAddBookmark: false
}

const setupStore = () => {

  setBookmarkData = data => {
    store.bookMarkData = data
  }

  setFilterBy = value => {
    store.filterBy = value
  }

  toggleAddBookmark = () => {
    store.showAddBookmark = !store.showAddBookmark
  }

  return {
    setBookmarkData,
    setFilterBy,
    toggleAddBookmark
  }
}