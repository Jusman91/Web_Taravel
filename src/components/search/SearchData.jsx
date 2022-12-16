import './SearchingDataStyles.css';
import { FiMapPin } from 'react-icons/fi';
import { CgCalendarDates } from 'react-icons/cg';
import DatePicker from 'react-datepicker';
import { BsArrowRight } from 'react-icons/bs';

export const SearchData = (props) => {
	return (
		<>
			<section className='wrapper-input'>
				<div className='input-destination-data'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<label htmlFor='destination'>{props.label}</label>
					<input
						type='text'
						placeholder={props.placeholder}
					/>
				</div>
			</section>
		</>
	);
};

export default SearchData;
