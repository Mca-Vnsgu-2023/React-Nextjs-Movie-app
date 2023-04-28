import React from 'react'
import styles from './mainLayout.styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import IndiLogo from '../../public/images/indi-logo.png'
import SearchLogo from '../../public/images/search.png'
import MovieLogo from '../../public/images/movie.png'
import StarLogo from '../../public/images/favourite.png'
import UserLogo from '../../public/images/user.png'

const Header = () => {
  return (
    <div>
        <div className={styles.mainDiv}>
           <Link href='/'> 
             <Image src={IndiLogo} alt="indiLogo" className={styles.headerLink} />
           </Link>
           <Link href='/SearchMovie'> 
             <Image src={SearchLogo} alt="searchLogo" className={styles.headerLink} />
           </Link>
           <Link href='/Movies'> 
             <Image src={MovieLogo} alt="movieLogo" className={styles.headerLink} />
           </Link>
           <Link href='/'> 
             <Image src={StarLogo} alt="starLogo" className={styles.headerLink} />
           </Link>
           <Link href='/'> 
             <Image src={UserLogo} alt="userLogo" className={styles.headerLink} />
           </Link>
        </div>
    </div>
  )
}

export default Header