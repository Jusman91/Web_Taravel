import React from 'react';
import './ContentDataStyles.css';
import TourImg1 from './../asset/tour/t1.jpg';
import TourImg2 from './../asset/tour/t2.jpg';
import TourImg3 from './../asset/tour/t3.jpg';
import TourImg4 from './../asset/tour/t4.jpg';
import TourImg5 from './../asset/tour/t5.jpg';
import TourImg6 from './../asset/tour/t6.jpg';
import TourImg7 from './../asset/tour/t7.jpg';
import TourImg8 from './../asset/tour/t8.jpg';
import TourImg9 from './../asset/tour/t9.jpg';
import TourImg10 from './../asset/tour/t10.jpg';
import TourImg11 from './../asset/tour/t11.jpg';
import TourImg12 from './../asset/tour/t12.jpg';
import ContentData from './ContentData';

function TrendingTour() {
	return (
		<section className='container'>
			<div className='head'>
				<h2>Trending Tour Packages</h2>
				<p>
					Hundreds of our travellers are going to this
					trips. Embark on your unforgetable journeys too.
				</p>
			</div>
			<div className='wrapp-content-tour'>
				<ContentData
					cNameContainer='wrapp-img-tour'
					cName='desc-tour'
					img1={TourImg1}
					text='Australia'
					textHeading='08D Precious East Coast Aussie'
					cNamePrice='price'
					text2='Start from'
					currency='Rp'
					price=' 19.800.000'
					btnClass='btn-hide'
				/>
				<ContentData
					cNameContainer='wrapp-img-tour'
					cName='desc-tour'
					img1={TourImg2}
					text='Australia'
					textHeading='08D Precious East Coast Aussie'
					cNamePrice='price'
					text2='Start from'
					currency='Rp'
					price=' 19.800.000'
					btnClass='btn-hide'
				/>
				<ContentData
					cNameContainer='wrapp-img-tour'
					cName='desc-tour'
					img1={TourImg3}
					text='Australia'
					textHeading='08D Precious East Coast Aussie'
					cNamePrice='price'
					text2='Start from'
					currency='Rp'
					price=' 19.800.000'
					btnClass='btn-hide'
				/>
				<ContentData
					cNameContainer='wrapp-img-tour'
					cName='desc-tour'
					img1={TourImg4}
					text='Australia'
					textHeading='08D Precious East Coast Aussie'
					cNamePrice='price'
					text2='Start from'
					currency='Rp'
					price=' 19.800.000'
					btnClass='btn-hide'
				/>
			</div>
		</section>
	);
}

export default TrendingTour;
