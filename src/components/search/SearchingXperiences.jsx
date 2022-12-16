import { useState } from 'react';
import './SearchingDataStyles.css';
import { CgCalendarDates } from 'react-icons/cg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsArrowRight } from 'react-icons/bs';
import { addDays } from 'date-fns/esm';
import RangeDate from './RangeDate';
import 'react-datepicker/dist/react-datepicker.css';
import SearchData from './SearchData';

export const SearchingXperiences = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(
		addDays(new Date(), 1),
	);

	return (
		<>
			<div className='container-grid'>
				<SearchData
					label='Where to go:'
					placeholder='Select To Go...'
				/>
				<RangeDate
					icon1={CgCalendarDates}
					text='DateRange:'
					DatePicker1={DatePicker}
					startDate={startDate}
					setStartDate={setStartDate}
					enddate='end-date'
					DatePicker2={DatePicker}
					icon2={BsArrowRight}
					endDate={endDate}
					setEndDate={setEndDate}
				/>
				<button className='btn-src'>Search</button>
			</div>
		</>
	);
};

export default SearchingXperiences;
