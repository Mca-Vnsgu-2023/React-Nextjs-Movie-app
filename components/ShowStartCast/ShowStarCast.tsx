import React, { useState } from 'react'
import styles from './showStarCast.styles.module.scss'
import Image from 'next/image'


interface IProp {
    data: any

}

const ShowStarCast = (props: IProp) => {

    const { data } = props

    const showRecord = 5
    const [displyLength, setDisplyLength] = useState(5)

    const toggleList = () => {
        if (displyLength === showRecord) {
            setDisplyLength(data.length)
        } else {
            setDisplyLength(showRecord)
        }
    }

    return (
        <div className={styles.showStarCast}>
            <div>
                {data &&
                    <ul>
                        <h2 style={{ paddingBottom: "20px" }}>Star Cast</h2>
                        {(Array.isArray(data) && data.length > 0) ?
                            <>
                                {data.map((item, index) => {
                                    if (index < displyLength) {
                                        return (
                                            <li key={index}>
                                                <div className={`${styles.avatarImg} col-3`}>
                                                    <Image width={52} height={52}
                                                        src={item?.person?.image?.medium || `https://ui-avatars.com/api/?name=${item?.person?.name.split(' ').slice(0, 2).join(' ')}`}
                                                        alt='avatarImg'>
                                                    </Image>
                                                </div>
                                                <span className='col-5'>{item?.person?.name}</span>
                                                <span className='col-4'>{item?.character?.name}</span>
                                            </li>
                                        )
                                    }
                                })}
                                {data.length > 5 &&
                                    <button className={styles.seeMoreBtn} onClick={toggleList}>
                                        {displyLength === showRecord ? 'See more..' : 'See less..'}
                                    </button>
                                }
                            </>
                            :
                            <span>No record.</span>
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default ShowStarCast