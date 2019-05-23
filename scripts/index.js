const api = setupAPI()
const storeActions = setupStore()

const getFormData = form => {
  const formData = new FormData(form)
  const data = {}
  formData.forEach((value, key) => {{data[key] = value}})
  return data
}

const errorHandler = err => console.error(err)

const setupTemplate = (templateCallback, target) => {
  console.log(target)
  const { template, bindHandlers } = templateCallback()
  $(target).append(template)
  bindHandlers.forEach(h => h())
}


const getAllBookmarks = () => {
  return api.getBookmarks()
    .then(res => res.json())
    .then(bookMarkData => storeActions.setBookmarkData(bookMarkData))
    .catch(errorHandler)
}

const render = () => {
  $('main > *').html('')

  getAllBookmarks()
    .then(() => console.log(store))
    .then(() => {
      store.bookMarkData.forEach(bookmarkData => {
        if(+bookmarkData.rating <= +store.filterBy || store.filterBy === 'all') {
          setupTemplate(() => addBookMark(bookmarkData), '.bookmarks-target')
        }
      })
    })

  setupTemplate(addOrFilterBookmarksForm, '.add-filter-target')
  if (store.showAddBookmark) {
    setupTemplate(addBookmarkForm, '.add-bookmark-target')
  }


}


$(() => {
  render()

})
