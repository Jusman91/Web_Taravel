import React from 'react';
import '../data/ContentDataStyles.css';

function ContentData(props) {
	return (
		<div>
			<div className={props.containerData}>
				<div className={props.cNameContainer}>
					<img src={props.img1} alt='img_content' />
					<div className={props.cName}>
						<h6>{props.text}</h6>
						<h3>{props.textHeading}</h3>
						<h5>{props.text1}</h5>
						<div className={props.cNamePrice}>
							<h6>{props.text2}</h6>
							<p>
								{props.currency}
								<span>{props.price}</span>
							</p>
						</div>
						<p className='desc-tour-city'>
							{props.descTourHover}
						</p>
					</div>
					<div className='wrapper-btn'>
						<button className={props.btnClass}>
							{props.btn}
						</button>
					</div>
				</div>
			</div>
			<div className='details-tour'>{props.details}</div>
		</div>
	);
}

export default ContentData;
