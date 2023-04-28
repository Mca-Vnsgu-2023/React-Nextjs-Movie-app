import React, { Fragment, useEffect, useState } from 'react'
import styles from './showCard.styles.module.scss'
import { useGetAllScheduleQuery } from './store';
import DefaultImg from '../../public/images/placeholder.png'
import Link from 'next/link';
import Image from 'next/image';
import Loader from '../Loader/Loader';

const ShowCard = () => {

    const { data: allScheduleData, error, isSuccess, isLoading } = useGetAllScheduleQuery({});

    const [scheduleData, setScheduleData] = useState<any>([])

    const showRecord = 12

    const [displayLength, setDisplayLength] = useState(12)

    const toggleList = () => {
        if (displayLength === showRecord) {
            setDisplayLength(scheduleData.length)
        }
        else {
            setDisplayLength(showRecord)
        }
    }

    useEffect(() => {
        if (Array.isArray(allScheduleData) && allScheduleData.length > 0) {
            const FinalDataList = allScheduleData
            setScheduleData(FinalDataList)
        }
    }, [allScheduleData])

    return (
        <div className={styles.mainDiv}>
            {isLoading && <Loader />}
            {isSuccess && allScheduleData &&
                <Fragment>
                    <div className='row' style={{ fontSize: "20px" }}>
                        <div className='col-8'>
                            <p>Recently Added Films</p>
                        </div>
                        <div className='col-4'>
                            {scheduleData.length > 12 &&
                                <button className={styles.moreCardBtn} onClick={toggleList}>
                                    {displayLength === showRecord ? 'More..' : 'Less..'}
                                </button>
                            }
                        </div>
                    </div>
                    {(Array.isArray(allScheduleData) && allScheduleData.length > 0) ?
                        <>
                            <div className={`${styles.subDiv} col-sm-10`}>
                                {scheduleData.map((item: any, index: any) => {
                                    if (index < displayLength) {
                                        return (
                                            <div key={index} className={styles.imgDiv}>
                                                <Link href={`/WatchNowShow/${item?.show?.id}`} style={{ textDecoration: 'none' }}>
                                                    <Image className={styles.imgSize} width={190} height={280} src={item?.show?.image?.medium || DefaultImg} alt="img" ></Image>
                                                    <p className={styles.movieName}>{item?.show?.name}</p>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </>
                        : null
                    }
                </Fragment>
            }
        </div>
    )
}

export default ShowCard