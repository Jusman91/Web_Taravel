import React from 'react';
import './HotelsPartnerStyles.css';

function HotelsPartner(props) {
	return (
		<div className='wrapp-img-hotel'>
			<img src={props.img1} alt='hotel' />
			<div className='desc'>
				<h3>{props.textHeading}</h3>
				<h5>{props.text1}</h5>
				<h6>{props.text2}</h6>
				<p>
					{props.currency}
					<span>{props.price}</span>
				</p>
			</div>
			<div className='wrapper-btn'>
				<button className='btn'>Check Hotels</button>
			</div>
		</div>
	);
}

export default HotelsPartner;
