import React from 'react'

const BookCard = (props) => {
    <div  className='card-container'>
        <img src={props.image} alt=""/>
        <div className="">
            <h2>{props.title}</h2>
            <h3>{props.authors}</h3>
            <p>{props.publishedDates}</p>
        </div>
    </div>
}
export default BookCard