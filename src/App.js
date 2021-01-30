import bookList from './books.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// import placeholderImage from './placeholder-img.jpg'
import Book from './BookItem.js'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'

// const handleImageError = (ev) => {
//   ev.target.src = { placeholderImage }
// }

function App () {
  return (
    <div className='body'>
      <div className='App-header'>
        <div className='App-title animate__animated animate__fadeInLeft'>FREE SHELF<i className='fa fa-book' />
          <div className='books-avail'>Books available: {bookList.length}</div>
        </div>
      </div>
      <div className='content-block row animate__animated animate__fadeInUp'>
        {bookList.map((book, idx) => (<Book book={book} key={idx} />))}
      </div>
      <div className='fixed-footer' />
    </div>

  )
}

export default App
