import { HeroHotelData } from '../hotel/HeroHotelData';
import HerosContainer from '../container/HerosContainer';
import Slider from 'react-slick';
import PrevArrow from '../arrow/PrevArrow';
import NextArrow from '../arrow/NextArrow';

const HeroHotels = () => {
	const data = HeroHotelData();
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		cssEase: 'linear',
	};
	return (
		<>
			<Slider {...settings}>
				{data.map((item, idx) => (
					<HerosContainer
						key={idx}
						img={item.img}
						wrapperHero='wrapper-img-hero-tour'
					/>
				))}
			</Slider>
		</>
	);
};

export default HeroHotels;
