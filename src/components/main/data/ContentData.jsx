import React from 'react';
import { Link } from 'react-router-dom';
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
								<span> {props.price}</span>
							</p>
						</div>
						<p className='desc-tour-city'>
							{props.descTourHover}
						</p>
					</div>
					<div className={props.wrapperbtn}>
						<div className={props.btnClass}>
							{props.btn}
						</div>
						<div>
							<p>{props.desc}</p>
							<h3>{props.title}</h3>
						</div>
					</div>
					<div className={props.classbtnslide}>
						{props.btnslide}
					</div>
				</div>
			</div>
			<div className='details-tour'>
				<Link to='/details'>{props.details}</Link>
			</div>
		</div>
	);
}

export default ContentData;
