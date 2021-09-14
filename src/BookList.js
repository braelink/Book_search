import React from 'react'
import BookCard from './BookCard'
const BookList = (props) => {
    return(
    <div className="List">
        {
            props.books.map((book, i) => {
                return (<BookCard 
                    key={i}
                    image={book.volumeinfo.imagelinks.thumbnail}
                    title={book.volumeinfo.title}
                    author={book.k.volumeinfo.authors}
                    published={book.k.volumeinfo.publishedDate} />)
        }

            )}
    </div>
    )}

export default BookList