import React from 'react'
import StarRatings from 'react-star-ratings'
import styles from './showRating.styles.module.scss'

interface IProp {
    rating: number;
    shownumber?: boolean | undefined;
}

const ShowRating = (props: IProp) => {

    const { rating, shownumber } = props

    return (
        <div className={styles.ratingTextDiv}>
            <StarRatings
                rating={rating * 50 / 100}
                numberOfStars={5}
                starDimension="18px"
                starSpacing='1px'
                starRatedColor='yellow'
                starEmptyColor='white'
            />
           <div>
                 {shownumber && <p className={styles.ratingText}>{rating}/10</p>}
           </div>
        </div>
    )
}

export default ShowRating