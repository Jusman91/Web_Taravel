import React from 'react';
import HeroVideo from '../components/hero/home/HeroVideo';
import BannerSlide from '../components/banners/BannerSlide';
import HotelsOffers from '../components/main/hotels/HotelsOffers';
import FlightsOffers from '../components/main/flights/FlightsOffers';
import XperiencesTour from '../components/main/tour_xperiences/XperiencesTour';
import TrendingTour from '../components/main/tour_packages/TrendingTour';
import SearchingHome from '../components/search/home/SearchingHome';
import ResSearchingHome from '../components/search/responsive/ResSearchingHome';




function Home() {

  return (
    <>
      <HeroVideo />
      <SearchingHome />
      <ResSearchingHome />
      <BannerSlide />
      <HotelsOffers />
      <FlightsOffers />
      <XperiencesTour />
      <TrendingTour />
    </>
  )
}

export default Home