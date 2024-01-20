import React from 'react'
import Banners from './Banners'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSparade from './LocationSparade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'


const Home = () => {
  return (
    <div>
        <Banners/>
        <HomeCategory/>
        <CategoryShowCase/>
        <Register/>
        <LocationSparade/>
        <AboutUs/>
        <AppSection/>
        <Sponsor/>
    </div>
  )
}

export default Home