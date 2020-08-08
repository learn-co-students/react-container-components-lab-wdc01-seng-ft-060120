import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchBar from './SearchBar'

const NYT_API_KEY = 'D3wmUlGhIp5xePNIEooUzyGohuHrU8Y9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  handleSearchSubmit = event => {
    event.preventDefault()
    this.makeFetch(this.state.searchTerm)
  }

  render() {
    return(
      <div className='ui container searchable-movie-reviews'>
        <SearchBar
          updateSearchTerm={this.updateSearchTerm}
          searchTerm={this.state.searchTerm}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount() {
    this.makeFetch()
  }

  makeFetch = (searchTerm='latest') => {
    let urlWithSearchTerm = URL
    console.log('serach term in make fetch', searchTerm)
    if (searchTerm !== 'latest'){
      urlWithSearchTerm = urlWithSearchTerm + `&query=${searchTerm}`
    }
    console.log(urlWithSearchTerm)
    fetch(urlWithSearchTerm)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }))
  }
}

export default SearchableMovieReviewsContainer
