import Slider from 'react-slick';
import BannerSlideTourData from './BannerSlideTourData';
import ContentData from '../main/data/ContentData';
import './BannerSlideTour.css';

const BannerSlideTour = () => {
	const data = BannerSlideTourData();
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	};
	return (
		<>
			<div className='container-slide-tour'>
				<Slider {...settings}>
					{data?.map((item, idx) => (
						<ContentData
							key={idx}
							cNameContainer={item.cNameContainer}
							img1={item.img1}
							wrapperbtn={item.wrapperbtn}
							classbtnslide={item.classbtnslide}
							btnslide={item.btnslide}
							desc={item.desc}
							title={item.title}
						/>
					))}
				</Slider>
			</div>
		</>
	);
};

export default BannerSlideTour;
