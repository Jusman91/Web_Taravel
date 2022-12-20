import '../component_data/HoverData.css';
import Slider from 'react-slick';
import HoverXperiencesData from '../xperiences/HoverXperiencesData';
import HoverData from '../component_data/HoverData';

const HoverXperiences = () => {
	const data = HoverXperiencesData();
	const settings = {
		dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		cssEase: 'linear',
	};
	return (
		<>
			<div className='container-banner'>
				<div className='text-banner'>
					<p>+60.000 things to do all over the world </p>
					<h2>Let the xperiences begin!</h2>
					<button>Explore Now</button>
				</div>
				<div className='container-data-hover'>
					<Slider {...settings}>
						{data.map((item, idx) => (
							<HoverData
								key={idx}
								image={item.image}
								text={item.text}
							/>
						))}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default HoverXperiences;
