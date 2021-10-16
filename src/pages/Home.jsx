import React from 'react'
import Header from '../components/header/Header'
import BestSellers from '../components/BestSellers/BestSellers'
import LatestSale from '../components/LatestSale/LatestSale'
import WeeklyFeaturedProducts from '../components/WeeklyFeaturedProducts/WeeklyFeaturedProducts'
import SealEndsSoon from '../components/SealEndsSoon/SealEndsSoon'
import EndSoonSlider from '../components/EndSoonSlider/EndSoonSlider'
import Feed from '../components/Feed/Feed'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <section>
            <Header />
            <BestSellers />
            <LatestSale />
            <WeeklyFeaturedProducts />
            <SealEndsSoon />
            <EndSoonSlider />
            <Feed />
            <Footer />
        </section>
    )
}

export default Home
