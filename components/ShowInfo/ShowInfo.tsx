import React from 'react'
import styles from './showInfo.styles.module.scss'

interface IProp {
    data: {
        language: string[] | null,
        webChannel: { name: string | undefined },
        network: { name: string | undefined },
        status: string,
        schedule: {
            days: string[]
            time: string
        } | null,
        genres: string[] | null
    }
}

const ShowInfo = (props: IProp) => {

    const { data } = props

    return (
        <div className={styles.showInfoDiv}>
            {data &&
                <ul>
                    <h2 style={{ paddingBottom: "20px" }}>Show Info</h2>
                    <li>
                        <span className={styles.spanText1}>Language</span>
                        <span className={styles.spanText2}>{data?.language || 'N/A'}</span>
                    </li>
                    <li>
                        <span className={styles.spanText1}>Streamed on</span>
                        <span className={styles.spanText2}>{data?.webChannel?.name || data?.network?.name}</span>
                    </li>
                    <li>
                        <span className={styles.spanText1}>Status</span>
                        <span className={styles.spanText2}>{data?.status || 'N/A'}</span>
                    </li>
                    <li>
                        <span className={styles.spanText1}>Schedule</span>
                        <span className={styles.spanText2}>{data?.schedule?.days?.join(", ") || 'N/A'}</span>
                    </li>
                    <li>
                        <span className={styles.spanText1}>Genres</span>
                        <span className={styles.spanText2}>{data?.genres?.join(", ") || 'N/A'}</span>
                    </li>
                </ul>
            }
        </div>
    )
}

export default ShowInfo