import React from 'react';

function FooterData(props) {
	return (
		<div>
			<div className='list'>
				<h3>{props.textHead}</h3>
				<div>{props.text1}</div>
				<div>{props.text2}</div>
				<div>{props.text3}</div>
				<div>{props.text4}</div>
				<div>{props.text5}</div>
				<div>{props.text6}</div>
				<div>{props.text7}</div>
			</div>
		</div>
	);
}

export default FooterData;
