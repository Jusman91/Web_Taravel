// import '../container/SearchingDataStyles.css';

function RangeDate(props) {
	return (
		<>
			<div className='date'>
				<div className='start-date'>
					<div className='icon'>
						<props.icon1 />
					</div>
					<div className='text'>{props.text}</div>
					<props.DatePicker1
						selected={props.startDate}
						onChange={(date) => props.setStartDate(date)}
					/>
				</div>
				<div className={props.enddate}>
					<div className='icon-to'>
						<props.icon2 />
					</div>
					<props.DatePicker2
						selected={props.endDate}
						onChange={(date) => props.setEndDate(date)}
					/>
				</div>
			</div>
		</>
	);
}

export default RangeDate;
