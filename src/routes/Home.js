import React from 'react';
import HeroVideo from '../component/HeroVideo';
import BannerSlide from '../component/BannerSlide';
import HotelsOffers from '../component/HotelsOffers';
import FlightsOffers from '../component/FlightsOffers';
import XperiencesTour from '../component/XperiencesTour';
import TrendingTour from '../component/TrendingTour';




function Home() {
  return (
    <>
      <HeroVideo />
      <BannerSlide />
      <HotelsOffers />
      <FlightsOffers />
      <XperiencesTour />
      <TrendingTour />
    </>
  )
}

export default Home