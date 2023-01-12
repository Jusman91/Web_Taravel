import React from 'react';
import './ChooseUsStyles.css';

function ChooseUsData(props) {
	return (
		<div>
			<div className='wrapper-text'>
				<h3>{props.text1}</h3>
				<div>
					<h4>{props.text2}</h4>
					<div className='small-text'>
						<p>{props.text3}</p>
						<p>{props.text4}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChooseUsData;
