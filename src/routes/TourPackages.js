import React from 'react';
import SearchingPackages from '../components/search/SearchingPackages';
import HeroTours from '../components/hero/HeroTours';
import AllDestinations from '../components/main/tour_packages/all_destination/AllDestinations';





function TourPackages() {
  return (
    <>
      <HeroTours />
      <SearchingPackages />
      <AllDestinations />
    </>
  )
}

export default TourPackages