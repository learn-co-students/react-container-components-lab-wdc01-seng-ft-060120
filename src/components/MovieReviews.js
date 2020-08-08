// Code MovieReviews Here
import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = (props) => {

    let { reviews } = props

    const renderReviews = () => {
        return reviews.map(review => <MovieReview review={review} key={review.display_title} className="review"/>)
    }

    return(
        <div className="review-list">
            {renderReviews()}
        </div>

    )
}

export default MovieReviews