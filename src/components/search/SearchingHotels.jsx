import { useState } from 'react';
import './SearchingFlights.css';
import { CgCalendarDates } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { MdCheckroom } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns/esm';
import RangeDate from './RangeDate';
import SearchData from './SearchData';

export const SearchingHotels = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(
		addDays(new Date(), 1),
	);

	const [showFormCaategory, setShowFormCaategory] =
		useState(false);
	let [values, setValues] = useState({
		people: 1,
		room: 1,
	});
	let [people, setPeople] = useState(1);
	let [room, setRoom] = useState(1);

	const handleCategory = () => {
		setShowFormCaategory(true);
	};

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPeople(values.people);
		setRoom(values.room);
		setValues({
			people: 1,
			room: 1,
		});
		setShowFormCaategory(false);
	};

	return (
		<>
			<div className='container-grid'>
				<SearchData
					label='Destination'
					placeholder='city, country'
				/>
				<RangeDate
					icon1={CgCalendarDates}
					DatePicker1={DatePicker}
					startDate={startDate}
					setStartDate={setStartDate}
					enddate='end-date'
					DatePicker2={DatePicker}
					icon2={BsArrowRight}
					endDate={endDate}
					setEndDate={setEndDate}
				/>
				<div
					onClick={handleCategory}
					className='booking-room'>
					<div className='people'>
						<BsPerson className='icon' />
						<div>
							{people}
							<span> People</span>
						</div>
					</div>
					<div className='room'>
						<MdCheckroom className='icon' />
						<div>
							{room}
							<span> Room</span>
						</div>
					</div>
					<form
						onSubmit={handleSubmit}
						className={
							showFormCaategory
								? 'form-category'
								: 'form-category-hidden'
						}>
						<div className='adult'>
							<label htmlFor='adult'>People</label>
							<input
								onChange={handleChange}
								type='number'
								min='1'
								name='people'
								value={values.people}
							/>
						</div>
						<div className='child'>
							<label htmlFor='child'>Room</label>
							<input
								onChange={handleChange}
								type='number'
								min='1'
								name='room'
								value={values.room}
							/>
						</div>
						<button className='btn-submit'>Submit</button>
					</form>
				</div>
				<button className='btn-src'>Search</button>
			</div>
		</>
	);
};

export default SearchingHotels;
