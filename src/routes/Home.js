import React from 'react';
import HeroVideo from '../components/hero/HeroVideo';
import BannerSlide from '../components/banners/BannerSlide';
import HotelsOffers from '../components/main/hotels/HotelsOffers';
import FlightsOffers from '../components/main/flights/FlightsOffers';
import XperiencesTour from '../components/main/tour_xperiences/XperiencesTour';
import TrendingTour from '../components/main/tour_packages/TrendingTour';




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