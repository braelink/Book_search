import React, { Component } from "react";
import SearchArea from "./searchArea";
import request from "superagent"
import BookList from "./BookList";

class Books extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            searchField: '',
            Sort: ''

        }
    }
    searchBook = (e) => {
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.searchField})
        .then((data) => {
            console.log(data)
            this.setState({ books: [...data.body.yems]})
        })

    }
     handleSort = (e) => {
         this.setState({ sort: e.target.value})
     }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }

  render() {
    return <div>
       
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort= {this.handleSort}/>
        <BookList books= {this.state.books}/>
    </div>;
  }
}
export default Books;
