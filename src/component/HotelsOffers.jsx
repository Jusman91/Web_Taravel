import React from 'react';
import './ContentDataStyles.css';
import HotelImg1 from './../asset/hotels/h1.jpg';
import HotelImg2 from './../asset/hotels/h2.jpg';
import HotelImg3 from './../asset/hotels/h3.jpg';
import HotelImg4 from './../asset/hotels/h4.jpg';
import HotelImg5 from './../asset/hotels/h5.jpg';
import HotelImg6 from './../asset/hotels/h6.jpg';
import HotelImg7 from './../asset/hotels/h7.jpg';
import HotelImg8 from './../asset/hotels/h8.jpg';
import ContentData from './ContentData';

function HotelsOffers() {
	return (
		<section className='container'>
			<div className='head'>
				<h2>Hotel Offers</h2>
				<p>
					Hundreds of our travellers are going to this
					trips. Get the best Hotel's Deal!
				</p>
			</div>
			<div className='wrapp-content'>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg1}
					textHeading='Park Hyatt Melbourne'
					text1='Melbourne'
					text2='Starting from'
					currency='IDR'
					price=' 3.597.368'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg2}
					textHeading='The St. Regis Bali Resort'
					text1='kuta'
					text2='Starting from'
					currency='IDR'
					price=' 8.129.214'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg3}
					textHeading='The Fullerton'
					text1='Singapore'
					text2='Starting from'
					currency='IDR'
					price=' 4.104.698'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg4}
					textHeading='Grand Hyatt'
					text1='Kuala Lumpur'
					text2='Starting from'
					currency='IDR'
					price=' 2.686.797'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg5}
					textHeading='W Bangkok'
					text1='Bangkok'
					text2='Starting from'
					currency='IDR'
					price=' 3.212.412'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg6}
					textHeading='Waldorf Astoria'
					text1='Bejing'
					text2='Starting from'
					currency='IDR'
					price=' 3.859.966'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg7}
					textHeading='Hilton Tokyo'
					text1='Tokyo'
					text2='Starting from'
					currency='IDR'
					price=' 5.471.254'
					btn='Check Hotels'
				/>
				<ContentData
					cNameContainer='wrapp-img'
					cName='desc'
					img1={HotelImg8}
					textHeading='JW Mariot'
					text1='Seoul'
					text2='Starting from'
					currency='IDR'
					price=' 4.000.964'
					btn='Check Hotels'
				/>
			</div>
		</section>
	);
}

export default HotelsOffers;
