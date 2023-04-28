import TopRatingShow from '@/components/TopRatingShow/TopRatingShow'
import Header from '@/layout/MainLayout/Header'
import React from 'react'

const Movies = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{background: "#232323", paddingTop: "25px"}}>
                <TopRatingShow />
            </div>
        </div>
    )
}

export default Movies