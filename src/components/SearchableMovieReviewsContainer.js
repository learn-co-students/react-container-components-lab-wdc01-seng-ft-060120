import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    setSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    searchReviews = (e) => {
        e.preventDefault()
        let searchURL = URL + `&query=${this.state.searchTerm}`;
        fetch(searchURL)
        .then(resp => resp.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }



    render(){
        return(
            <div className="searchable-movie-reviews">
                <h1>Search Reviews:</h1>
                <form onSubmit={(e) => this.searchReviews(e)}>
                    <input
                        type= "text"
                        name= "search"
                        onChange={(e) => this.setSearchTerm(e.target.value)}

                    />
                    <input 
                        type= "submit"
                    />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
