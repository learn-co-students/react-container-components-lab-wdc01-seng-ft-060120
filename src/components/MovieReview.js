import React from 'react'

const MovieReview = (props) => {

    let { review } = props

    return(
        <div>
            <h4 style={{marginBottom: 0}} >{ review.headline }</h4>
            <em><p>By: { review.byline }</p></em>
            <img src={review.multimedia.src} alt={review.display_title}/>
            <p>{ review.summary_short}</p><br/><br/>
        </div>
    )
}

export default MovieReview