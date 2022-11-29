import React from 'react';
import '../component/ContentDataStyles.css';
import ContentData from '../component/ContentData';
import FlightsOffers from '../component/FlightsOffers';
import BannerSlide from '../component/BannerSlide';
import FlightImg9 from './../asset/flights/f9.jpg';
import FlightImg10 from './../asset/flights/f10.jpg';
import FlightImg11 from './../asset/flights/f11.jpg';
import FlightImg12 from './../asset/flights/f12.jpg';
import Hero from '../component/Hero';


function Flights() {
  return (
    <>
      <Hero />
      <FlightsOffers
      />
      <section className='container-flights'>
        <div className='wrapp-content'>
          <ContentData
            cNameContainer='wrapp-img'
            cName='desc'
            img1={FlightImg9}
            textHeading='Jakarta - Honglkong'
            text1='Where East meets West'
            text2='Starting from'
            currency='IDR'
            price=' 2.341.970'
            btnClass='btn'
            btn='Check Flights'
          />
          <ContentData
            cNameContainer='wrapp-img'
            cName='desc'
            img1={FlightImg10}
            textHeading='Jakarta - Yogyakarta'
            text1='traditional arts and cultural heritage'
            text2='Starting from'
            currency='IDR'
            price=' 603.731'
            btnClass='btn'
            btn='Check Flights'
          />
          <ContentData
            cNameContainer='wrapp-img'
            cName='desc'
            img1={FlightImg11}
            textHeading='Jakarta - Osaka'
            text1="Jepang nation's kitchen"
            text2='Starting from'
            currency='IDR'
            price=' 6.484.353'
            btnClass='btn'
            btn='Check Flights'
          />
          <ContentData
            cNameContainer='wrapp-img'
            cName='desc'
            img1={FlightImg12}
            textHeading='Jakarta - Queenstown'
            text1='The adventure capital of the world'
            text2='Starting from'
            currency='IDR'
            price=' 8.141.141'
            btnClass='btn'
            btn='Check Flights'
          />
        </div>
      </section>
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