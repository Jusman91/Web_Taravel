import Slider from 'react-slick';
import XperienceXData from './XperienceXData';
import ContainerHover from './ContainerHover';

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
						<ContainerHover
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
