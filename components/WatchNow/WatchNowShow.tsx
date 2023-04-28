import React, { Fragment, useState } from 'react'
import { useGetShowsByIdQuery } from './store'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './watchNowshow.styles.module.scss'
import Image from 'next/image'
import ShowInfo from '../ShowInfo/ShowInfo'
import ShowStarCast from '../ShowStartCast/ShowStarCast'
import ShowRating from '../ShowStarRating/ShowRating'
import Loader from '../Loader/Loader'


interface IProps {
    showId: number
}

const WatchNowShow = (props: IProps) => {

    const { showId } = props

    const { data: showsByIdData, error, isSuccess, isLoading } = useGetShowsByIdQuery({ id: showId })

    const [LoadingComplete, setLoadingComplete] = useState(true)
    const ImageLoadingComplete = () => {
        setLoadingComplete(false)
    }

    return (
        <div>
            {isLoading || LoadingComplete && <Loader />}
            {isSuccess && showsByIdData &&
                <Fragment>
                    <div className={styles.mainDiv}>
                        <div className={styles.HomeDiv}>
                            <div>
                                <Link href={'/'} style={{ textDecoration: 'none' }}>
                                    <h3 className={styles.text}>
                                        <FontAwesomeIcon icon={faArrowLeft} style={{ width: "30px" }} /> &nbsp;
                                        Home
                                    </h3>
                                </Link>
                                <div className={styles.imgDiv}>
                                    <Image className={styles.originalImg} 
                                        src={showsByIdData?.image?.original} alt="img"
                                         width={350} height={420}
                                         onLoad={ImageLoadingComplete} />
                                </div>
                            </div>
                            <div className={styles.textDiv}>
                                <h1>{showsByIdData?.name}</h1>
                                <p className={styles.textSummary} dangerouslySetInnerHTML={{ __html: showsByIdData?.summary || '' }}></p>
                                <h4>{showsByIdData?.genres?.join(', ') || "N/A"} | Country: {showsByIdData?.network?.country?.name}</h4>

                                <div className={styles.ratingDiv}>
                                    <ShowRating rating={showsByIdData?.rating?.average || 0} shownumber />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ paddingLeft: "150px", margin: 0 }}>
                        <div className='col-xl-6 col-md-6 col-lg-6'>
                            <ShowInfo data={showsByIdData} />
                        </div>
                        <div className='col-xl-6 col-md-6 col-lg-6'>
                            {showsByIdData?._embedded &&
                                <ShowStarCast data={showsByIdData?._embedded?.cast} />
                            }
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default WatchNowShow