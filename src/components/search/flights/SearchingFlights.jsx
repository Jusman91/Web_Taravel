import { useState } from 'react';
import '../flights/SearchingFlights.css';
import { FiMapPin } from 'react-icons/fi';
import { CgCalendarDates } from 'react-icons/cg';
import { BsArrowRight } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { TbArmchair } from 'react-icons/tb';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns/esm';
import RangeDate from '../date/RangeDate';

function SearchingFlights() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(
		addDays(new Date(), 1),
	);
	const [show, setShow] = useState('');
	const [showFormCaategory, setShowFormCaategory] =
		useState(false);
	let [values, setValues] = useState({
		adult: 1,
		child: 0,
		infant: 0,
	});
	let [adult, setAdult] = useState(1);
	let [child, setChild] = useState(0);
	let [infant, setInfant] = useState(0);
	const handleRoundTrip = (value) => {
		setShow(value);
	};
	const handleCategory = (e) => {
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
		setAdult(values.adult);
		setChild(values.child);
		setInfant(values.infant);
		setValues({
			adult: 1,
			child: 0,
			infant: 0,
		});
		setShowFormCaategory(false);
	};
	return (
		<>
			<section className='container-search'>
				<div className='track'>
					<div className='one-way'>
						<input
							onClick={() => handleRoundTrip('one-way')}
							type='radio'
							id='oneway'
							name='track'
						/>
						<label htmlFor='one way'>One Way</label>
					</div>
					<div className='round-trip'>
						<input
							onClick={() => handleRoundTrip('round-trip')}
							type='radio'
							id='roundtrip'
							name='track'
						/>
						<label htmlFor='round trip'>Round Trip</label>
					</div>
				</div>
				<div className='input-departure'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<select name='departure' id=''>
						<option value=''>Select Departure...</option>
						<option value=''>Select 1</option>
						<option value=''>Select 2</option>
					</select>
				</div>
				<div className='input-destination'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<select name='destination' id=''>
						<option value=''>Select Destination...</option>
						<option value=''>Select 1</option>
						<option value=''>Select 2</option>
					</select>
				</div>
				<RangeDate
					icon1={CgCalendarDates}
					DatePicker1={DatePicker}
					startDate={startDate}
					setStartDate={setStartDate}
					enddate={
						show === 'round-trip'
							? 'end-date'
							: 'hidden-date'
					}
					DatePicker2={DatePicker}
					icon2={BsArrowRight}
					endDate={endDate}
					setEndDate={setEndDate}
				/>
				<div
					onClick={handleCategory}
					className='age-category'>
					<div className='adult'>
						<BsPerson className='icon' />
						{adult}
						<span> Adult</span>
					</div>
					<div className='child'>
						<BsPerson className='icon' />
						{child}
						<span> Child,</span> {infant}
						<span> Infant</span>
					</div>
					<form
						onSubmit={handleSubmit}
						className={
							showFormCaategory
								? 'form-category'
								: 'form-category-hidden'
						}>
						<div className='adult'>
							<label htmlFor='adult'>Adult</label>
							<input
								onChange={handleChange}
								type='number'
								min='1'
								name='adult'
								value={values.adult}
							/>
						</div>
						<div className='child'>
							<label htmlFor='child'>Child</label>
							<input
								onChange={handleChange}
								type='number'
								min='0'
								name='child'
								value={values.child}
							/>
						</div>
						<div className='infant'>
							<label htmlFor='infant'>Infant</label>
							<input
								onChange={handleChange}
								type='number'
								min='0'
								name='infant'
								value={values.infant}
							/>
						</div>
						<button className='btn-submit'>Submit</button>
					</form>
				</div>
				<div className='flight-class'>
					<TbArmchair className='icon' />
					<select>
						<option>Economy</option>
						<option>Business</option>
						<option>Executive</option>
					</select>
				</div>
				<button className='btn-src'>Search</button>
			</section>
		</>
	);
}

export default SearchingFlights;
