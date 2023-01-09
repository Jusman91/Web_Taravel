import '../container/HerosContainer.css';

const HerosContainer = (props) => {
	return (
		<>
			<div className='container-heros'>
				<div className='wrapper-heros'>
					<div className={props.wrapperHero}>
						<img src={props.img} alt='' />
					</div>
				</div>
			</div>
		</>
	);
};

export default HerosContainer;
