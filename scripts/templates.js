const addOrFilterBookmarksForm = () => {

  const className = 'add-or-filter-form'

  const template = `
  <form class='${className}'>
    <button>Add Bookmarks</button>
    <select>
      <option ${ store.filterBy === 'all' && 'selected' } value="all">all</option>
      <option ${ store.filterBy === '1' && 'selected' } value="1">1</option>
      <option ${ store.filterBy === '2' && 'selected' } value="2">2</option>
      <option ${ store.filterBy === '3' && 'selected' } value="3">3</option>
      <option ${ store.filterBy === '4' && 'selected' } value="4">4</option>
      <option ${ store.filterBy === '5' && 'selected' } value="5">5</option>
    </select>
 </form>`

 const handleAddBookmarkClick = event => {
   event.preventDefault()
   storeActions.toggleAddBookmark()
   render()
 }

 const handleRatingFilterChange = event => {
   const { value } = event.target
   storeActions.setFilterBy(value)
   render()
 }

 return {
   className,
   template,
   bindHandlers: [
     () => $(`.${className} > button`).click(handleAddBookmarkClick),
     () => $(`.${className}`,).change(handleRatingFilterChange)
   ]
 }
}

const addBookmarkForm = () => {

  const className = 'add-bookmark-form'

  const template = `
  <form class='${className}'>
    <input type="text" name="title" placeholder="title">
    <input type="text" name="desc" placeholder="description">
    <input type="text" name="url" placeholder="url">
    <select name="rating">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button>submit bookmark</button>
  </form>`

 const handleSubmitBookmarkClick = event => {
   event.preventDefault()
   const { target } = event
   const data = getFormData(target)

   api.createBookmark(data)
     .then(res => res.json())
     .then(console.log)
     .then(render)
     .catch(console.error)
 }

 return {
   className,
   template,
   bindHandlers: [
     () => $(`.${className}`).submit(handleSubmitBookmarkClick),
   ]
 }
}

const addBookMark = data => {

  const { title, desc, url, rating } = data

  const className = 'bookmark'

  const template = `
    <section class='${className}'>
      <span>${title}</span>
      <span>${desc}</span>
      <a href="${url}">${url}</span>
      <span>${rating}</span>
    </section>`

 return {
   className,
   template,
   bindHandlers: [
   ]
 }
}