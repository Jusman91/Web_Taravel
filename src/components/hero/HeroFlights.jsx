import { HeroFlightData } from './HeroFlightData';
import HerosContainer from './HerosContainer';
import Slider from 'react-slick';
import '../main/tour_packages/tour_details/TourDetails.css';
import PrevArrow from './arrow/PrevArrow';
import NextArrow from './arrow/NextArrow';

function HeroFlights() {
	const data = HeroFlightData();
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
		// <HerosData img1={HeroImg1} img2={HeroImg2} />
	);
}

export default HeroFlights;
