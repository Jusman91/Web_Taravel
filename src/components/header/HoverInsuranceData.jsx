import './HoverInsurance.css';

export const HoverInsuranceData = (props) => {
	return (
		<>
			<div className='wrapper-content'>
				<div className='text'>
					<h1>{props.text1}</h1>
					<p>{props.text2}</p>
				</div>
				<div className='image'>
					<img src={props.image} alt='Logo' />
				</div>
			</div>
		</>
	);
};

export default HoverInsuranceData;
