import { IoIosArrowUp } from 'react-icons/io';
import '../../main/tour_packages/tour_details/TourDetails.css';

const NextArrow = (props) => {
	const { onClick } = props;
	return (
		<div>
			<div
				className='icon-arrow-right-hero'
				onClick={onClick}>
				<IoIosArrowUp className='iconarrowright' />
			</div>
		</div>
	);
};

export default NextArrow;
