import React from 'react'
import Header from './Header'
import Slider from '@/components/Slider/Slider'
import styles from './mainLayout.styles.module.scss'
import ShowCard from '@/components/ShowCard/ShowCard'
import TopRatingShow from '@/components/TopRatingShow/TopRatingShow'

const MainLayout = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className={styles.sliderPageDiv}>
            <Slider />
            <ShowCard />
            <TopRatingShow />
        </div>
    </div>
  )
}

export default MainLayout