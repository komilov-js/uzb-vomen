import React from 'react'
import HomeComponent from './homeComponent/homeComponent'
import About from '../about/about'
import Maqsad from '../maqsad/maqsad'
import Xola from '../xola/xola'
import News from '../news/news'
import VideoLavhalar from '../VideoLavhalar/videoLavhalar'
const Home = () => {
  return (
    <div>
      <HomeComponent />
      <About />
      <Maqsad />
      <Xola />
      <News />
      <VideoLavhalar />

    </div>
  )
}

export default Home