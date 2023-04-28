import React, { Fragment, useEffect, useState } from 'react'
import { useGetAllSearchQuery } from './store'
import styles from './searchMovie.styles.module.scss'
import searchIcon from '../../public/images/search.png'
import DefaultImg from '../../public/images/placeholder.png'
import Header from '@/layout/MainLayout/Header'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '../Loader/Loader'


const SearchMovies = () => {

    const [inputData, setInputData] = useState("")

    const { data: searchData, isSuccess, isLoading } = useGetAllSearchQuery({ searchValue: inputData })

    const [searchingList, setSearchingList] = useState<any>([])

    const onFormSubmit = (event: any) => {
        event.preventDefault();
        setInputData(inputData)
    }

    useEffect(() => {
        if (inputData && (Array.isArray(searchData) && searchData.length > 0)) {
            setSearchingList(searchData)
        }
    }, [searchData])

    return (
        <div>
            <div>
                <Header />
            </div>
            {isLoading && <Loader />}
            <div className={styles.mainDiv}>
                <form className={`${styles.form1} row`} onSubmit={onFormSubmit}>
                    <div className='col-xl-6 col-md-6 col-lg-6'>
                        <Image src={searchIcon} alt="searchIcon"></Image>
                        <input type='text' placeholder='search..' name='inputData'
                            className={styles.searchInput}
                            value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    </div>
                </form>

                <div>
                    {isSuccess && searchData &&
                        <Fragment>
                            {(Array.isArray(searchData) && searchData.length > 0) ?
                                <div className={styles.cardDiv}>
                                    {searchingList.map((item: any, index: any) => {
                                        return (
                                            <div key={index} className={styles.imgDiv}>
                                                <Link href={`/WatchNowShow/${item?.show?.id}`} style={{ textDecoration: 'none' }}>
                                                    <Image src={item?.show?.image?.medium || DefaultImg} className={styles.imgSize} width={190} height={280} alt="imageCard" />
                                                    <p className={styles.movieName}>{item?.show?.name}</p>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                null
                            }
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchMovies