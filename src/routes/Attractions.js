import React from 'react';
import HeroAttractions from '../components/hero/HeroAttractions';
import BannerSlide from '../components/banners/BannerSlide';
import SearchingAttractions from '../components/search/SearchingAttractions';






function Attractions() {
  return (
    <>
      <HeroAttractions />
      <SearchingAttractions />
      <BannerSlide />

    </>
  )
}

export default Attractions