import React, { Fragment, useEffect, useState } from 'react'
import styles from './topRatingShow.styles.module.scss'
import { useGetAllTrendingQuery } from '../Slider/store';
import DefaultImg from '../../public/images/placeholder.png'
import ShowRating from '../ShowStarRating/ShowRating'
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '../Loader/Loader';


const TopRatingShow = () => {

    const { data: topRatingFilms, error, isSuccess, isLoading } = useGetAllTrendingQuery({});

    const [topRatingList, setTopRatingList] = useState<any>([])

    useEffect(() => {
        if (Array.isArray(topRatingFilms) && topRatingFilms.length > 0) {
            const FinalDataList = topRatingFilms.filter(x => x.rating?.average > 8)
            setTopRatingList(FinalDataList)
        }
    }, [topRatingFilms])

    const showRecord = 12

    const [displayLength, setDisplayLength] = useState(12)

    const toggleList = () => {
        if (displayLength === showRecord) {
            setDisplayLength(topRatingList.length)
        }
        else {
            setDisplayLength(showRecord)
        }
    }

    const [hasMore, setHasMore] = useState<boolean>(true)
    const fetchMoreData = () => {
        if (topRatingList.length === topRatingFilms.length) {
            setHasMore(false)
            return;
        }
    }


    return (
        <div className={styles.mainDiv}>
            {isLoading && <Loader />}
            {isSuccess && topRatingFilms &&
                <Fragment>
                    <div className='row' style={{ fontSize: "20px" }}>
                        <div className='col-10'>
                            <p>Top Rated Films</p>
                        </div>
                        {/* <div className='col-2'>
                    {topRatingList.length > 12 &&
                        <button className={styles.moreCardBtn} onClick={toggleList}>
                            {displayLength === showRecord ? 'More..' : 'Less..'}
                        </button>
                    }
                </div> */}
                    </div>
                    {(Array.isArray(topRatingFilms) && topRatingFilms.length > 0) ?
                        <>
                            <InfiniteScroll
                                dataLength={topRatingList.length}
                                next={fetchMoreData}
                                hasMore={hasMore}
                                loader={null}
                                style={{ overflowX: 'hidden' }}
                            >
                                <div className={`${styles.subDiv} col-sm-10`}>
                                    {topRatingList.map((item: any, index: any) => {
                                        // if (index < displayLength) {
                                        return (
                                            <div key={index} className={styles.imgDiv}>
                                                <Link href={`/WatchNowShow/${item?.id}`} style={{ textDecoration: 'none' }}>
                                                    <Image className={styles.imgSize} src={item?.image?.medium || DefaultImg} width={190} height={280} alt="img" ></Image>
                                                    <div className={styles.ratingDiv}>
                                                        <ShowRating rating={item?.rating?.average} shownumber />
                                                    </div>
                                                    <p className={styles.movieName}>{item?.name}</p>
                                                </Link>
                                            </div>
                                        )
                                        // }
                                    })}
                                </div>
                            </InfiniteScroll>
                        </>
                        : null
                    }
                </Fragment>
            }
        </div>
    )
}

export default TopRatingShow