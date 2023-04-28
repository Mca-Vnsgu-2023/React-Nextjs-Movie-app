import React, { Fragment, useEffect, useState } from 'react'
import styles from './slider.styles.module.scss'
import DefaultImg from '../../public/images/placeholder.png'
import { useGetAllTrendingQuery } from './store'
import Image from 'next/image'
import BtnWatchIcon from '../../public/images/btn-watch.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from '../Loader/Loader'


const Slider = () => {

  const router = useRouter()

  const { data: allTrendingData, error, isSuccess, isLoading } = useGetAllTrendingQuery({});

  const [trendingData, setTrendingData] = useState<any>([])

  useEffect(() => {
    if (Array.isArray(allTrendingData) && allTrendingData.length > 0) {
      const FinalDataList = allTrendingData.slice(0, 10)
      setTrendingData(FinalDataList)
    }
  }, [allTrendingData])

  const [isSetId, SetId] = useState<number>()

  const [state, setState] = useState(0);

  const trendingList = trendingData[state];



  const Next = () => {
    setState((state + 1) % trendingData.length);
  }
  const Prev = () => {
    const newState = state - 1;
    if (newState < 0) {
      setState(trendingData.length - 1);
    }
    else {
      setState(state - 1);
    }
  }


  return (
    <div className={styles.mainSlideDiv}>
      {isLoading &&
        <Loader />
      }
      {isSuccess && trendingList &&
        <Fragment>
          <div className={styles.sliderDiv}>
            <div key={trendingList?.id}>
              <Image src={trendingList?.image?.original} className={styles.sliderImg} alt={'mainImage'} width={1400} height={544} />
            </div>
            <div className={styles.textOn_image}>
              <p className={styles.movieName}> {trendingList?.name} </p>
              <p className={styles.movieType}>{trendingList?.genres?.join(', ') || "N/A"} | {trendingList?.network?.country?.name}</p>
              <p className={styles.summary} dangerouslySetInnerHTML={{ __html: trendingList?.summary || "" }}></p>
              <div className={styles.watchBtnDiv}>
                <Link href={`/WatchNowShow/${trendingList?.id}`}>
                  <button className={styles.watchNowBtn}>
                    <Image className={styles.btnWatchIcon} src={BtnWatchIcon} alt='BtnWatchIcon' />Watch Now
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.leftBtn}>
              <span onClick={Prev}>
                <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.rightLeftArrow} />
              </span>
            </div>
            <div className={styles.rightBtn}>
              <span onClick={Next}>
                <FontAwesomeIcon icon={faCircleChevronRight} className={styles.rightLeftArrow} />
              </span>
            </div>

          </div>
        </Fragment>
      }

    </div>
  )
}

export default Slider