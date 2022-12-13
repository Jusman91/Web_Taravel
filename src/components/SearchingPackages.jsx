import React, { useState } from 'react';
import './SearchingFlightsStyles.css';
import { FiMapPin } from 'react-icons/fi';
import { CgCalendarDates } from 'react-icons/cg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsArrowRight } from 'react-icons/bs';
import { addDays } from 'date-fns/esm';

function SearchingPackages() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(
		addDays(new Date(), 1),
	);

	return (
		<>
			<section className='container-search'>
				<div className='input-destination'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<label htmlFor='destination'>Where to go:</label>
					<input
						type='text'
						placeholder='Select Destinations'
					/>
				</div>
				<div className='date'>
					<div className='start-date'>
						<div className='icon'>
							<CgCalendarDates />
						</div>
						<div>
							<DatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</div>
					</div>
					<div className='end-date'>
						<div className='icon-to'>
							<BsArrowRight />
						</div>
						<div className='icon'>
							<CgCalendarDates />
						</div>
						<div>
							<DatePicker
								selected={endDate}
								onChange={(date) => setEndDate(date)}
							/>
						</div>
					</div>
				</div>
				<button className='btn-src'>Find</button>
			</section>
		</>
	);
}

export default SearchingPackages;
