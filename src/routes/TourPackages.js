import React from 'react';
import SearchingPackages from '../components/search/SearchingPackages';
import TrendingTour from '../components/main/tour_packages/TrendingTour';
import HeroTours from '../components/hero/HeroTours';





function TourPackages() {
  return (
    <>
      <HeroTours />
      <SearchingPackages />
      <TrendingTour />
    </>
  )
}

export default TourPackages