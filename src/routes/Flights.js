import React from 'react';
import '../components/main/data/ContentDataStyles.css';
import FlightsOffers from '../components/main/flights/FlightsOffers';
import BannerSlide from '../components/banners/BannerSlide';
import Hero from '../components/hero/Hero';
import SearchingFlights from '../components/SearchingFlights';


function Flights() {
  return (
    <>
      <Hero />
      <SearchingFlights />
      <FlightsOffers
        flights
      />

      <div className='container-airlines-partners'>
        <h3>Airlines Partners</h3>
        <p>We are proud to be part of these Domestic & International airlines</p>
        <img src='https://smailingtour.co.id/img/icon/airlines-partners.jpg' alt="Airlines Partner" />
      </div>
      <BannerSlide />
    </>
  )
}

export default Flights