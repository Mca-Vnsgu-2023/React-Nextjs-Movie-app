import WatchNowShow from '@/components/WatchNow/WatchNowShow'
import Header from '@/layout/MainLayout/Header'
import { useRouter } from 'next/router'
import React from 'react'

const WatchNow = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {id &&
          <WatchNowShow showId={Number(id)} />
        }
      </div>
    </div>
  )
}

export default WatchNow