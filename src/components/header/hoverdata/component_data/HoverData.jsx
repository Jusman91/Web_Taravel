import '../component_data/HoverData.css';

export const HoverData = (props) => {
	return (
		<>
			<div className='container-img'>
				<div className='wrapper-img'>
					<img src={props.image} alt='Hotels' />
				</div>
				<div className='wrapper-text'>
					<h5>{props.text}</h5>
				</div>
			</div>
		</>
	);
};

export default HoverData;
