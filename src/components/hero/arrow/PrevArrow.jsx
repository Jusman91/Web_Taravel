import { IoIosArrowDown } from 'react-icons/io';
import '../container/HerosContainer.css';

const PrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div>
			<div
				className='icon-arrow left-hero'
				onClick={onClick}>
				<IoIosArrowDown className='iconarrowleft' />
			</div>
		</div>
	);
};

export default PrevArrow;
