import React from 'react';
import '../hero/HeroStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import HeroImg1 from '../../asset/hero/h1.jpg';
import HeroImg2 from '../../asset/hero/h2.jpg';

function Hero() {
	return (
		<div className='hero'>
			<Carousel slide={true} variant='dark'>
				<Carousel.Item interval-={300}>
					<div>
						<img src={HeroImg1} alt='Herop First slide' />
					</div>
				</Carousel.Item>
				<Carousel.Item interval-={300}>
					<div>
						<img src={HeroImg2} alt='Hero Second slide' />
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Hero;
