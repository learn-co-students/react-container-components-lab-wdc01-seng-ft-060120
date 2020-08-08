import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list container'>
      {reviews.map( (review, idx) => {
        return (
          <div key={idx} className='review'>
            <br/>
            <div>
              {review.display_title}
            </div>
            <div>
              {review.summary_short}
            </div>
            <br/>
            <br/>
          </div>
        )
      } )}
    </div>
  )
}

export default MovieReviews
