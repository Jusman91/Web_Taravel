import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SlideStyles.css';
import Banner1 from './../asset/b2.jpg';
import Banner2 from './../asset/b3.jpg';
import Banner3 from './../asset/b4.jpg';
import Banner4 from './../asset/b5.jpg';
import Banner5 from './../asset/b1.jpg';

function Slide() {
	return (
		<section className='container-banners'>
			<div className='head'>
				<h2>Hot Deals</h2>
				<p>
					Get Instant Coupon, Cashback, Point Rewards and
					more Crazy deals!
				</p>
			</div>
			<div className='banner-slide'>
				<Carousel slide={true} variant='dark'>
					<Carousel.Item interval-={300}>
						<div>
							<img
								className='d-block w-100'
								src={Banner1}
								alt='First slide'
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item interval-={300}>
						<div>
							<img
								className='d-block w-100'
								src={Banner2}
								alt='Second slide'
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item interval-={300}>
						<div>
							<img
								className='d-block w-100'
								src={Banner3}
								alt='Third slide'
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item interval-={300}>
						<div>
							<img
								className='d-block w-100'
								src={Banner4}
								alt='Third slide'
							/>
						</div>
					</Carousel.Item>
				</Carousel>
				<div className='banner-img'>
					<div className='text-banner'>
						<h3>Join Ngakak Private Journey</h3>
						<h4>with family and friends</h4>
					</div>
					<img src={Banner5} alt='banner' />
				</div>
			</div>
			<button className='btn-banner'>
				Explore More Hot Deals
			</button>
		</section>
	);
}

export default Slide;
