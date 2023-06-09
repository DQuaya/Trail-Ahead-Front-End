import React from 'react'
import ArticleInfo from './ArticleInfo'
import CoverImage from'./CoverImage'
import ProfilePix from './ProfilePix'
import TrailName from './TrailName'
import WYSK from './WYSK'
import WYSKArt from './WYSKArt'

const Hikedetails = () => {
  return (
    <div className='hike-details'>
        <CoverImage/>
        <TrailName/>
        <ArticleInfo />
        <ProfilePix />
        <WYSK />
        <WYSKArt />
    </div>
  )
}

export default Hikedetails