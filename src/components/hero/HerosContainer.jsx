import '../main/tour_packages/tour_details/TourDetails.css';

const HerosContainer = (props) => {
	return (
		<>
			<div className='container-heros'>
				<div className='wrapper-heros'>
					<div className='wrapper-img-tour-details'>
						<img src={props.img} alt='' />
					</div>
					{/* <div className='wrapper-img-tour-details'>
							<img src={props.img2} alt='' />
						</div>
						<div className='wrapper-img-tour-details'>
							<img src={props.img3} alt='' />
						</div> */}
				</div>
			</div>
		</>
	);
};

export default HerosContainer;
