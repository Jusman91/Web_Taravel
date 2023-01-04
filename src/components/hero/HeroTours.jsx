import HerosContainer from './HerosContainer';
import Slider from 'react-slick';
import '../main/tour_packages/tour_details/TourDetails.css';
import PrevArrow from './arrow/PrevArrow';
import NextArrow from './arrow/NextArrow';
import { HeroTourData } from './HeroTourData';

export const HeroTour = () => {
	const data = HeroTourData();
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
		<>
			<Slider {...settings}>
				{data.map((item, idx) => (
					<HerosContainer key={idx} img={item.img} />
				))}
			</Slider>
		</>
	);
};

export default HeroTour;
