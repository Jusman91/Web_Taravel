import '../hero/HeroStyles.css';
import Carousel from 'react-bootstrap/Carousel';

export const HerosDatas = (props) => {
	return (
		<div>
			<Carousel
				className='hero'
				slide={true}
				variant='dark'>
				<Carousel.Item
					className='wrapper-img'
					interval-={300}>
					<img
						className='heros'
						src={props.img1}
						alt='Herop First slide'
					/>
				</Carousel.Item>
				<Carousel.Item
					className='wrapper-img'
					interval-={300}>
					<img
						className='heros'
						src={props.img2}
						alt='Hero Second slide'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default HerosDatas;
