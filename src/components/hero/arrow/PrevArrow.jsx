import { IoIosArrowDown } from 'react-icons/io';
import '../../main/tour_packages/tour_details/TourDetails.css';

const PrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div>
			<div
				className='icon-arrow-left-hero'
				onClick={onClick}>
				<IoIosArrowDown className='iconarrowleft' />
			</div>
		</div>
	);
};

export default PrevArrow;
