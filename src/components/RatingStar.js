import React from 'react'
import StarRatings from '../../node_modules/react-star-ratings'

const RatingStar = ({movie}) => {
    return (
        <div>
    <StarRatings
        rating={movie}
        starRatedColor="yellow"
        numberOfStars={5}
        starDimension='30px'
        starSpacing='5px'
        name="rating"
      />
        </div>
    )
}

export default RatingStar
