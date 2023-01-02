import React from 'react';
import SearchingPackages from '../components/search/SearchingPackages';
import HeroTours from '../components/hero/HeroTours';
import AllDestinations from '../components/main/tour_packages/all_destination/AllDestinations';
import '../components/main/tour_packages/all_destination/AllDestinations.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TrendingTour from '../components/main/tour_packages/TrendingTour';


function TourPackages() {
  const [hidden, setHidden] = useState(false)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('alldestinations');
    setHidden(true)
  }
  return (
    <>
      <HeroTours />
      <SearchingPackages />
      <div className={hidden ? 'hidden' : ''}>
        <ul className='list-destinations'>
          <li className='trending'>
            Trending Tour Packages
          </li>
          <li onClick={handleClick}>
            All Destinations
          </li>
        </ul>
      </div>
      <div className={hidden ? 'hidden' : ''}>
        <TrendingTour />
      </div>
      <Routes>
        <Route path='/alldestinations' element={<AllDestinations tourpackages />}
        />
      </Routes>
    </>
  )
}

export default TourPackages