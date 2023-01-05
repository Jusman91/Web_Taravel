import React from 'react';
import TourPackages from '../../../../routes/TourPackages';
import HerosData from '../../../hero/HerosContainer';
import TourData from '../TourData';
import PrevArrow from '../../../hero/arrow/PrevArrow';
import NextArrow from '../../../hero/arrow/NextArrow';
import HerosContainer from '../../../hero/HerosContainer';
import Slider from 'react-slick';
import '../tour_details/TourDetails.css';

export const TourDetails = () => {
	const data = TourData()[1];
	console.log(data.details);
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		speed: 1000,
		// autoplaySpeed: 2000,
		cssEase: 'linear',
	};
	return (
		<div>
			<Slider {...settings}>
				{data.details.heroImg.map((item, idx) => (
					<HerosContainer key={idx} img={item.heroImg} />
				))}
			</Slider>
			<div>
				<div>icon</div>
				<div>{data.textHeading}</div>
				<div>{data.text}</div>
			</div>
			<div>
				<p>{data.details.desc}</p>
			</div>
		</div>
	);
};

export default TourDetails;
