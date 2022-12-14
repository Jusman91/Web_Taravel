import React, { useState } from 'react';
import './SearchingFlightsStyles.css';
import { FiMapPin } from 'react-icons/fi';
import { CgCalendarDates } from 'react-icons/cg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchingFlights() {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<>
			<section className='container-search'>
				<div className='input-departure'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<input
						type='text'
						placeholder='Select Departure'
					/>
				</div>
				<div className='input-destination'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<input
						type='text'
						placeholder='Select Destination'
					/>
				</div>
				<div className='date'>
					<div className='icon'>
						<CgCalendarDates />
					</div>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>
				</div>
				<button className='btn-src'>Find</button>
			</section>
		</>
	);
}

export default SearchingFlights;
