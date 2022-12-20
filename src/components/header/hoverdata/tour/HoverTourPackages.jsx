import '../tour/HoverTourPackages.css';
import GroupX from '../tour/GroupX';
import OpenTripX from '../tour/OpenTripX';
import XperienceX from '../tour/XperienceX';
import { useState } from 'react';

function HoverTourPackages() {
	const [showComponent, setShowComponent] =
		useState('groupx');

	const handleClick = (value) => {
		setShowComponent(value);
	};

	return (
		<>
			<div className='container-hover-tourpackages'>
				<div className='wrapper-content'>
					<ul className='list-hover'>
						<li
							onClick={() => handleClick('groupx')}
							className={
								showComponent === 'groupx'
									? 'list-active'
									: 'list'
							}>
							GROUP X
						</li>
						<li
							onClick={() => handleClick('opentripx')}
							className={
								showComponent === 'opentripx'
									? 'list-active'
									: 'list'
							}>
							OPEN TRIP X
						</li>
						<li
							onClick={() => handleClick('xperiencex')}
							className={
								showComponent === 'xperiencex'
									? 'list-active'
									: 'list'
							}>
							XPERIENCE X
						</li>
						<li
							className='list'
							onClick={() => handleClick('groupx')}>
							PRIVATE X
						</li>
						<li
							className='list'
							onClick={() => handleClick('groupx')}>
							SEE ALL
						</li>
					</ul>
					{showComponent === 'groupx' && <GroupX />}
					{showComponent === 'opentripx' && <OpenTripX />}
					{showComponent === 'xperiencex' && <XperienceX />}
				</div>
			</div>
		</>
	);
}

export default HoverTourPackages;
