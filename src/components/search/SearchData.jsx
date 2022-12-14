import './SearchingFlightsStyles.css';
import { FiMapPin } from 'react-icons/fi';
import { CgCalendarDates } from 'react-icons/cg';
import DatePicker from 'react-datepicker';
import { BsArrowRight } from 'react-icons/bs';

export const SearchData = (props) => {
	return (
		<div>
			<section className='container-search'>
				<div className='input-destination'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<label htmlFor='destination'>{props.label}</label>
					<input
						type='text'
						placeholder={props.placeholder}
					/>
				</div>
				<div className='date'>
					<div className='start-date'>
						<div className='icon'>
							<CgCalendarDates />
						</div>
						<div>
							<DatePicker
								selected={props.startDate}
								onChange={(date) =>
									props.setStartDate(date)
								}
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
								selected={props.endDate}
								onChange={(date) => props.setEndDate(date)}
							/>
						</div>
					</div>
				</div>
				<button className='btn-src'>Find</button>
			</section>
		</div>
	);
};

export default SearchData;
