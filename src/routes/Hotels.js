import React from 'react';
import HotelsOffers from '../components/main/hotels/HotelsOffers';
import BannerSlide from '../components/banners/BannerSlide';
import HeroHotels from '../components/hero/hotel/HeroHotels';
import SearchingHotels from '../components/search/SearchingHotels';





function Hotels() {
  return (
    <>
      <HeroHotels />
      <SearchingHotels />
      <HotelsOffers hotels />
      <BannerSlide />


    </>
  )
}

export default Hotels