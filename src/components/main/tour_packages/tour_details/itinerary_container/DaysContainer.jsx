import '../TourDetails.css';

const DaysContainer = ({ days }) => {
	return (
		<>
			<div className='days'>
				<h3>{days.title}</h3>
				<figure>
					<img src={days.image} alt='Destiantions' />
					<figcaption>{days.desc}</figcaption>
				</figure>
			</div>
		</>
	);
};

export default DaysContainer;
