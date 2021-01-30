import { useState } from 'react'
import altImage from '../src/pexels-mentatdgt-1319854.jpg'

function BookItem (props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const { book } = props
  return (
    <div className='row'>
      {isOpen &&
        <div className='row box'>
          <div className='col-sm-9'>
            <div className='close-button' onClick={() => setIsOpen(false)}><p className='book-title'><i className='fa fa-angle-right' />{book.title}</p></div>
            <p className='book-author'>{book.author}</p>
            <p className='short-desc'>{book.shortDescription}</p>
            <div className='extend-button' onClick={() => setIsExpanded(!isExpanded)}><i className={isExpanded ? 'fa fa-toggle-on' : 'fa fa-toggle-off'} />{isExpanded ? 'Less Information' : 'More Information'}</div>
            {isExpanded && (
              <div className='extended'>
                <div>
                  <div className='expanded-top'><strong>URL: </strong><a href={book.url}>{book.url}</a></div>
                  {book.publisher && <div><strong>Publisher: </strong>{book.publisher}</div>}
                  {book.publicationDate && <div><strong>Publication Date: </strong>{book.publicationDate}</div>}
                  <div><strong>Full Description: </strong><p>{book.detailedDescription}</p></div>
                </div>
              </div>
            )}
          </div>
          <div className='col-sm-2'>
            <img className='book-cover' src={book.coverImageUrl ? `${book.coverImageUrl}` : `${altImage}`} alt={book.title} />
          </div>
        </div>}
      {isOpen === false &&
        <div className='row box'>
          <div className='col-sm-11'>
            <div className='open-button' onClick={() => setIsOpen(true)}><p className='book-title-small'><i className='fa fa-angle-down' />{book.title}</p></div>
          </div>
        </div>}
    </div>
  )
}

export default BookItem
