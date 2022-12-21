import '../banners/BannerSlide.css';

import Banner5 from '../../asset/banner/b1.jpg';
import Slider from 'react-slick';
import BannerSlideData from './BannerSlideData';
import BannerSlideContainer from './BannerSlideContainer';
import {
	IoIosArrowUp,
	IoIosArrowDown,
} from 'react-icons/io';

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className='icon-arrow-left' onClick={onClick}>
			<IoIosArrowDown className='iconarrowleft' />
		</div>
	);
}
function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className='icon-arrow-right' onClick={onClick}>
			<IoIosArrowUp className='iconarrowright' />
		</div>
	);
}

function Slide() {
	const data = BannerSlideData();
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		cssEase: 'linear',
	};
	return (
		<section className='container-banners'>
			<div className='head'>
				<h2>Hot Deals</h2>
				<p>
					Get Instant Coupon, Cashback, Point Rewards and
					more Crazy deals!
				</p>
			</div>
			<div className='wrapper-banners'>
				<div>
					<Slider {...settings}>
						{data.map((item, idx) => (
							<BannerSlideContainer
								key={idx}
								image={item.image}
								text1={item.text1}
								text2={item.text2}
							/>
						))}
					</Slider>
				</div>
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
