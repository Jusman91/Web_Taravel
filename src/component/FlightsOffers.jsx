import React from 'react';
import './ContentDataStyles.css';
import FlightImg1 from './../asset/flights/f1.jpg';
import FlightImg2 from './../asset/flights/f2.jpg';
import FlightImg3 from './../asset/flights/f3.jpg';
import FlightImg4 from './../asset/flights/f4.jpg';
import FlightImg5 from './../asset/flights/f5.jpg';
import FlightImg6 from './../asset/flights/f6.jpg';
import FlightImg7 from './../asset/flights/f7.jpg';
import FlightImg8 from './../asset/flights/f8.jpg';
import ContentData from './ContentData';

function FlightsOffers() {
	return (
		<>
			<section className='container-content'>
				<div className='head'>
					<h2>Flight Offers</h2>
					<p>
						Hundreds of our travellers are going to this
						trips. Get the best Flight's Deal!
					</p>
				</div>
				<div className='wrapp-content'>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg1}
						textHeading='Jakarta - Melbourne'
						text1='The coffee capital'
						text2='Starting from'
						currency='IDR'
						price=' 4.313.162'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg2}
						textHeading='Jakarta - Denpasar'
						text1='The Island of the Gots'
						text2='Starting from'
						currency='IDR'
						price=' 872.747'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg3}
						textHeading='Jakarta - Singapore'
						text1='Unique small city'
						text2='Starting from'
						currency='IDR'
						price=' 872.539'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg4}
						textHeading='Jakarta - Kuala Lumpur'
						text1='The capital city of the Malaysia'
						text2='Starting from'
						currency='IDR'
						price=' 948.187'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg5}
						textHeading='Jakarta - Bangkok'
						text1='The city of Angels'
						text2='Starting from'
						currency='IDR'
						price=' 864.767'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg6}
						textHeading='Jakarta - Bejing'
						text1='A cultural hub of china'
						text2='Starting from'
						currency='IDR'
						price=' 4.550.363'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg7}
						textHeading='Jakarta - Tokyo'
						text1="The world's most populous"
						text2='Starting from'
						currency='IDR'
						price=' 4.714.302'
						btnClass='btn'
						btn='Check Flights'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={FlightImg8}
						textHeading='Jakarta - Seoul'
						text1='The citu of the future'
						text2='Starting from'
						currency='IDR'
						price=' 3.183.420'
						btnClass='btn'
						btn='Check Flights'
					/>
				</div>
			</section>
		</>
	);
}

export default FlightsOffers;
