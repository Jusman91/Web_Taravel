import Slider from 'react-slick';
import XperienceXData from '../tour/XperienceXData';
import HoverData from '../component_data/HoverData';

function XperienceX() {
	const data = XperienceXData();
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		cssEase: 'linear',
	};
	return (
		<>
			<div className='grid-data'>
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
		</>
	);
}

export default XperienceX;
